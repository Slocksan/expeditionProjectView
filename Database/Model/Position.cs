using System.ComponentModel.DataAnnotations.Schema;

namespace ExpeditionProject.Database.Model
{
    [Table("POSITIONS")]
    public class Position
    {
        public int ID { get; set; }
        public string NAME { get; set; }
    }
}
