using Proiect1.DAL.Entities;
using Proiect1.DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Proiect1.DAL.Repositories
{
    public class BookRepository : IBookRepository
    {
        private readonly AppDbContext _context;

        public BookRepository(AppDbContext context)
        {
            _context = context;
        }
        public Task Create(Book book)
        {
            throw new NotImplementedException();
        }

        public Task Delete(Book book)
        {
            throw new NotImplementedException();
        }

        public Task<List<Book>> GetAll()
        {
            throw new NotImplementedException();
        }

        public async Task<Book> GetById(int id)
        {
            var book = await _context.Books.FindAsync(id);
            return book;
        }

        public Task Update(Book book)
        {
            throw new NotImplementedException();
        }
    }
}
