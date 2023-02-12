using Proiect1.DAL.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Proiect1.DAL.Interfaces
{
    public interface IBookRepository
    {
        Task<List<Book>> GetAll();
        Task<Book> GetById(int id);
        Task Create(Book book);
        Task Update(Book book);
        Task Delete(Book book);
    }
}
