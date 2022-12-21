/* Totally Not Another FizzBuzz 

Scrimba CEO Per Borgen wants you to write a program to grant special bonuses to all his employees based on their employee ID numbers! 

Scrimba has 100 employees and their employee ID numbers range from 1 - 100. If the employee's ID number is: 

Divisible by 3 - Vacation! 
Divisible by 5 - $100,000 bonus! 
Divisible by both 3 and 5 - JACKPOT! 1 Million and a Yacht!
Not divisible by 3 or 5 - :(
    
Write a program to loop through all the ID numbers and print their prize. 
Your function's output should look something like this: 

1 - :(
2 - :(
3 - Vacation! 
4 - :(
5 - $100,000 bonus!

Hint: Remainder operator, modulo 
 */

function awardBonuses() {
  const employees = [...Array(101).keys()].slice(1);
  const messages = [
    ":(",
    "Vacation!",
    "$100,000 bonus!",
    "JACKPOT! 1 Million and a Yacht!",
  ];
  let empId = 1;

  /**
   * Solution 1 [For and If..Else If]
   */
  // for(let empId = 1; empId <= 100; empId++) {
  //     if(!(empId % 3)) console.log(`${empId} - ${messages[1]}`);
  //     else if (!(empId % 5)) console.log(`${empId} - ${messages[2]}`);
  //     else if (!(empId % 15)) console.log(`${empId} - ${messages[3]}`);
  //     else console.log(`${empId} - ${messages[0]}`);
  // }

  /**
   * Solution 2 [While]
   */
  // while(empId <= 100) {
  //     !(empId % 3) ? console.log(`${empId} - ${messages[1]}`)
  //     : !(empId % 5) ? console.log(`${empId} - ${messages[2]}`)
  //     : !(empId % 15) ? console.log(`${empId} - ${messages[3]}`)
  //     : console.log(`${empId} - ${messages[0]}`);

  //     empId++;
  // }

  /**
   * Solution 3 [For and Switch]
   */
  // for(let empId = 1; empId <= 100; empId++) {
  //     switch(true){
  //         case !(empId % 3):
  //             console.log(`${empId} - ${messages[1]}`);
  //             break;
  //         case !(empId % 5):
  //             console.log(`${empId} - ${messages[2]}`);
  //             break;
  //         case !(empId % 15):
  //             console.log(`${empId} - ${messages[3]}`);
  //             break;
  //         default:
  //             console.log(`${empId} - ${messages[0]}`);
  //     }
  // }

  /**
   * Solution 4 [ForEach]
   */
  employees.forEach((empId) => {
    const message = !(empId % 3)
      ? messages[1]
      : !(empId % 5)
      ? messages[2]
      : !(empId % 15)
      ? messages[3]
      : messages[0];

    console.log(`${empId} - ${message}`);
  });
}

awardBonuses();
