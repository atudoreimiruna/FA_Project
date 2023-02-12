using System;

namespace Proiect1.DAL.Models
{
    public class CollectionPostModel
    {
        public int Id { get; set; }
        public string CollectionName { get; set; }
        public int NumberOfItems { get; set; }
        public DateTime ReleaseDate { get; set; }
    }
}