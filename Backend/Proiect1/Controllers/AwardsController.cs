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
    public class AwardsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AwardsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> CreateAward(AwardPostModel model)
        {
            if (string.IsNullOrEmpty(model.Name))
            {
                return BadRequest("Invalid object. Model is null");
            }

            var award = new BookAward()
            {
                Name = model.Name,
                Contest = model.Contest,
                Data = model.Data,
                BookId = model.BookId
            };

            await _context.BookAwards.AddRangeAsync(award);
            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpGet("")]
        public async Task<IActionResult> GetAllAwards()
        {
            var awards = await _context.BookAwards.OrderBy(x => x.Name).ToListAsync();
            return Ok(awards);
        }

        [HttpGet("byId/{id}")]
        public async Task<IActionResult> GetAwards([FromRoute] int id)
        {
            var awards = await _context.BookAwards.Where(x => x.BookId == id).ToListAsync();
            return Ok(awards);
        }

        [HttpPut]
        public async Task<IActionResult> Update([FromQuery] int id, [FromQuery] string name)
        {
            var award = await _context.BookAwards.AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);
            award.Name = name; 
            _context.Entry(award).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            var awardV2 = await _context.BookAwards.FirstOrDefaultAsync(x => x.Id == id);
            return Ok();
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteAward([FromQuery] string nume)
        {
            var awards= await _context
                .BookAwards
                .Where(x => x.Contest == nume)
                .ToListAsync();

            if (awards == null)
            {
                return NotFound($"Award with Name = {nume} not found");
            }

            foreach (var aw in awards)
            {
                _context.BookAwards.Remove(aw);
                await _context.SaveChangesAsync();
            }
            return Ok();
        }
    }
}
