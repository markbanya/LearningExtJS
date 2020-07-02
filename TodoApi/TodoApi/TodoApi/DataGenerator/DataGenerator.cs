using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoApi.Models;

namespace TodoApi.DataGenerator
{
    public class DataGenerator
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new TodoContext(
                serviceProvider.GetRequiredService<DbContextOptions<TodoContext>>()))
            {
                // Look for any board games.
                if (context.TodoItems.Any())
                {
                    return;   // Data was already seeded
                }

                context.TodoItems.AddRange(
                    new TodoItem
                    {
                        Id = 1,
                        Retail = "Candy Land1",
                        Category = "Hasbro1",
                        Number = 1

                    },
                    new TodoItem
                    {
                        Id = 2,
                        Retail = "Candy Land2",
                        Category = "Hasbro2",
                        Number = 2
                    },
                     new TodoItem
                     {
                         Id = 3,
                         Retail = "Candy Land3",
                         Category = "Hasbro3",
                         Number = 3
                     }
                    );
                  

                context.SaveChanges();
            }
        }
    }
}
