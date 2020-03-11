# Contributing

## Development Guidelines

* Changes should be reviewed within the pull requests.
* Anyone with write access may approve code reviews
* In reviews, if there’s any contention over an issue, Tom Judd-Cooper is brought into the discussion.
* Branches should be raised with naming such as feature/name-of-feature or hotfix/name-of-feature
* The standard components should stay the same as the components in the nhsuk-frontend repo
* If you’re not sure if a component should go in the components or extensions repository, ask one of the maintainers.

## Tracking work (for NHS developers)

* Developers can either pick up work from an internal NHS JIRA board, or from the raised issues against this project.
* If the change is related to internal project work, that work is tracked in JIRA, otherwise we raise a ticket against the GitHub project.
* Developers perform their changes, and link their pull request within the Service Manual #react-components channel. 
  * If it is a project ticket, they will also raise it in that project’s Slack.
* Anyone can review the changes, and once we have one approval, any of the developers with write access can then release it. 
* They should tag the channel with [at]here to make everyone else aware.
* The pipeline then produces the patch version, and uploads it to npm.
* The developer should then notify any known downstream projects about the change.