using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Proiect1.DAL;
using Proiect1.DAL.Entities;
using Proiect1.DAL.Models;
using System.Linq;
using System.Threading.Tasks;

namespace Proiect1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private readonly AppDbContext _context;

        public BooksController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("fromBody")]
        public async Task<IActionResult> CreateBook(BookPostModel model)
        {
            if (string.IsNullOrEmpty(model.Name))
            {
                return BadRequest("Invalid object. Model is null");
            }

            var book = new Book()
            {
                Name = model.Name,
                Author = model.Author,
            };

            await _context.Books.AddRangeAsync(book);
            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpGet("")]
        public async Task<IActionResult> GetAllBook()
        {
            var books = await _context.Books.ToListAsync();

            return Ok(books);
        }

        [HttpGet("byId/{id}")]
        public async Task<IActionResult> GetBook([FromRoute] int id)
        {
            var book = await _context.Books.Where(x => x.Id == id).FirstOrDefaultAsync();

            return Ok(book);
        }

        [HttpPut]
        public async Task<IActionResult> Update([FromQuery] int id, [FromQuery] string name)
        {
            var book = await _context.Books.AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);

            book.Name = name;

            _context.Books.Update(book);

            await _context.SaveChangesAsync();

            return Ok();
        }
        
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBook([FromRoute]int id)
        {
            var book = await _context.Books.Where(x => x.Id == id).FirstOrDefaultAsync();

            if (book == null)
            {
                return NotFound($"Book with Id = {id} not found");
            }

            _context.Books.Remove(book);

            await _context.SaveChangesAsync();

            return Ok();
        }
       
    }
}
