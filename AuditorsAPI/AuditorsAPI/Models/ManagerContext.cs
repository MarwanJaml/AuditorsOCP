using Microsoft.EntityFrameworkCore;

namespace AuditorsAPI.Models
{
    public class ManagerContext: DbContext
    {
        public ManagerContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Manager> ManagerD { get; set; }
    }
}
