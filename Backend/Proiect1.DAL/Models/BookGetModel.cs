using System;
using System.Linq.Expressions;

namespace Proiect1.DAL.Models
{
    public class BookGetModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Author { get; set; }

        public static Expression<Func<Entities.Book, BookGetModel>> Projection => book=> new BookGetModel()
        {
            Id = book.Id,
            Name = book.Name,
            Author = book.Author
        };
    }
}
