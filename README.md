# Lab 5 - CI/CD and Testing

This repository contains the implementation of a basic CI/CD pipeline using **GitHub Actions** and unit testing with **Jest**.

## Project Structure
* **`code-to-unit-test/`**: Contains the source logic for summation and various regex-based string validations.
* **`__tests__/`**: Contains the Jest test suites for all validation functions.
* **`.github/workflows/`**: Contains the CI/CD configuration to run tests automatically on every push.

## Lab Artifacts
* `myError.png`: Evidence of a failed build check.
* `merged.png`: Evidence of a successful passing build check.

## Setup
To run tests locally:
1. `npm install`
2. `npm test`
