using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Proiect1.DAL.Entities;

namespace Proiect1.DAL.Configurations
{
    public class BookCollectionConfiguration : IEntityTypeConfiguration<BookCollection>
    {
        public void Configure(EntityTypeBuilder<BookCollection> builder)
        {
            builder.HasOne(p => p.Book)
                .WithMany(p => p.BookCollections)
                .HasForeignKey(p => p.BookId);

            builder.HasOne(p => p.Collection)
                .WithMany(p => p.BookCollections)
                .HasForeignKey(p => p.CollectionId);
        }
    }
}