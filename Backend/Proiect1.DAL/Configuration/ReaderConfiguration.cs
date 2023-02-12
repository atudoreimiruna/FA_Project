﻿using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Proiect1.DAL.Entities;

namespace Proiect1.DAL.Configurations
{
    public class ReaderConfiguration : IEntityTypeConfiguration<Reader>
    {
        public void Configure(EntityTypeBuilder<Reader> builder)
        {
            builder.Property(x => x.Name).HasColumnType("nvarchar(100)").HasMaxLength(100);
            builder.Property(x => x.Phone).HasColumnType("nvarchar(11)").HasMaxLength(11);
        }
    }
}
