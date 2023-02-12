using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Proiect1.DAL.Entities;

namespace Proiect1.DAL.Configurations
{
    public class ReaderAddressConfiguration : IEntityTypeConfiguration<ReaderAddress>
    {
        public void Configure(EntityTypeBuilder<ReaderAddress> builder)
        {
            builder.Property(x => x.City)
                .HasColumnType("nvarchar(100)")
                .HasMaxLength(100);
        }
    }
}

