namespace Proiect1.DAL.Models
{
    public class BookPostModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Author { get; set; }

        public int AddressId { get; set; }
        public int ClientsId { get; set; }
        public int AwardId { get; set; }
        public int CollectionId { get; set; }
        public string CollectionName { get; set; }
    }
}
