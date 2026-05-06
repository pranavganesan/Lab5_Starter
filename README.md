# Lab 5 - JavaScript DOM Basics and GitHub Actions

Name: Pranav Ganesan

[Expose Page](https://pranavganesan.github.io/Lab5_Starter/expose.html)

[Explore Page](https://pranavganesan.github.io/Lab5_Starter/explore.html)

## Check Your Understanding

**1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not?**
* **Answer:** No. Sending a message involves multiple moving parts—the UI, the server, and the database. This requires an **Integration Test** or an **End-to-End (E2E) Test** because a unit test is meant to test a single function in isolation, not a complex feature that relies on external systems.

**2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not?**
* **Answer:** Yes. This is a perfect candidate for a unit test. You are testing a single, isolated logic rule: "Does this function return false if the string is > 80 characters?" It doesn't require a network or a database to verify.
