## Planning & Specs
### Lew Davidson

1. Configuration/dependencies
  * For this project, I used node JS to create a Gulp asset pipeline. I used gulp as my task runner with help from bower. All testing (attempts) were made using Jasmine and Karma.
  * I used QUITE a few packages as well:
  -browserify-babelify
  -utilities
  -concat
  -watchify
  -jshint
  -uglify

2. Specs

| DESCRIPTION  | INPUT  | OUTPUT |
|---|---|---|
|   A user can input their age, it will be converted to seconds on the back-end to allow for comparison.   | Age (a number) | Age in seconds (a number). |
|  A user can enter their birthday on the front and the back-end will calculate the difference between the entered date and the current date, giving us the users age as a result. | Birthday(number/only need the year)  | Age(number) |
|   Compare the user's age to how old they would be on  Mercury | Calculated age either from age input or birthday input * .24 (number) |
|   Age on Mercury (number) | Compare the user's age to how old they would be on Venus | Calculated age either from age input or birthday input * .62 (number)  | Age on Venus (number) |  
| Compare the user's age to how old they would be on  Mars | Calculated age either from age input or birthday input * 1.88 (number) |
|   Age on Mars (number)   | Compare the user's age to how old they would be on Jupiter | Calculated age either from age input or birthday input * 11.86 (number) |
| Age on Jupiter (number) |
| Determine how many years the user has left to live based on gender and DOB | Current Age (number) | Years Left (number)  |
|   The user will receive a warning if their life-expectancy has been exceeded on a planet  | Current age on that planet(number) |  Years they have been dead (number) |



3. UX/UI
  * The site will have a simple input field for a user to enter their age. They can submit it to receive a list of their ages on other planets, and their remaining life-expectancy.

5. Polish
  * Would love to put ANY styling on it.
  * Make my README more interesting
  * Make it FUNCTIONAL!
