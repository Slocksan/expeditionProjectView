using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ExpeditionProject.Database.Model;
using Microsoft.EntityFrameworkCore;

namespace ExpeditionProject.Database
{
    public class ExpeditionsContext : DbContext
    {
        public DbSet<Position> Positions { get; set; }

        public ExpeditionsContext(DbContextOptions dbContextOptions): base(dbContextOptions)
        {
        }
    }
}
