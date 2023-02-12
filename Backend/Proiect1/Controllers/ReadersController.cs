using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Proiect1.DAL;
using Proiect1.DAL.Entities;
using Proiect1.DAL.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Proiect1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReadersController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ReadersController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> Create(ReaderPostModel model)
        {
            if (string.IsNullOrEmpty(model.Name))
            {
                return BadRequest("Invalid object. Model is null");
            }

            var client = new Reader()
            {
                Name = model.Name,
                Phone = model.Phone
            };

            await _context.Readers.AddRangeAsync(client);
            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpGet("")]
        public async Task<IActionResult> GetAllReaders()
        {
            var clients = await _context.Readers.OrderBy(x => x.Name).ToListAsync();

            return Ok(clients);
        }

        [HttpGet("byId/{id}")]
        public async Task<IActionResult> GetReaders([FromRoute] int id) 
        {

            var clients = from c in _context.Readers
                          join a in _context.BookReaders on c.Id equals a.ReaderId
                          join b in _context.Books on a.BookId equals b.Id
                          where (c.Id == a.ReaderId) && (a.BookId == b.Id) && (id == b.Id)
                          select new { c.Id, c.Name, c.Phone };

            return Ok(clients);
        }

        [HttpPut] 
        public async Task<IActionResult> Update([FromQuery] int id, [FromQuery] string phone)
        { 
            var client = await _context.Readers.AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);

            client.Phone = phone; 

            _context.Entry(client).State = EntityState.Modified;

            await _context.SaveChangesAsync();

            var client2 = await _context.Readers.FirstOrDefaultAsync(x => x.Id == id);

            return Ok();
        }


        [HttpDelete]
        public async Task<IActionResult> DeleteClient(int id)
        {
            var client = await _context.Readers.FirstOrDefaultAsync(x => x.Id == id);

            if (client == null)
            {
                return NotFound($"Client with Id = {id} not found");
            }

            _context.Readers.Remove(client);

            await _context.SaveChangesAsync();

            return Ok();
        }
    }
}
