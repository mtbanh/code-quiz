# Code Quiz

## About the project

This is a timed Javascript fundamental quiz that stores scores within a local storage.

---

## Getting started
Below are the prerequisite understanding and programs that were utilized :
* Visual Studio Code-click [here](https://code.visualstudio.com/) to a tutorial to install
* Github repository-click [here](https://help.github.com/en/github/)

---

## Code spotlight

The code snippet below execute a response that inform the user if their selection is correct or incorrect.
```js
{
    var selectedChoice = event.target;
        var selectedAnswer = selectedChoice.dataset["number"];

        if (selectedAnswer == currentQuestion.answer) {
            correctAnswer = "Correct!";
            score ++
            console.log(score)
        }
        else {
            correctAnswer = "Incorrect!";
        }
        progress.textContent = correctAnswer;
}
```

---

## Deployed link

[Live site](https://mtbanh.github.io/code-quiz/)
---

## Author

**Mai Banh**
- [Link to Github](https://github.com/mtbanh)
- [Link to LinkedIn](https://www.linkedin.com/in/mai-banh-311ba6164/)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## Acknowledgments
Thank you to everyone who have helped out, and especially my mentor, Matthew Chen! 