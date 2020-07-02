using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TodoApi.Models
{
    public class TodoItem
    {
        public long Id { get; set; }
        public string Retail { get; set; }
        public string Category { get; set; }
        public int Number { get; set; }
    }
}
