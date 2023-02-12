namespace Proiect1.DAL.Entities
{
    public class BookCollection
    {
        public int Id { get; set; }

        public int BookId { get; set; }
        public int CollectionId { get; set; }

        public virtual Book Book { get; set; }
        public virtual Collection Collection { get; set; }   
    }
}