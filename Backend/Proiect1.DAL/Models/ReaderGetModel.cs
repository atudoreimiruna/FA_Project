using System;
using System.Linq.Expressions;

namespace Proiect1.DAL.Models
{
    public class ReaderGetModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Phone { get; set; }

        public static Expression<Func<Entities.Reader, ReaderGetModel>> Projection => reader => new ReaderGetModel()
        {
            Id = reader.Id,
            Name = reader.Name,
            Phone = reader.Phone
        };
    }
}
