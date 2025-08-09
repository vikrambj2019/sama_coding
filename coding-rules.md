# Coding Rules & Standards

## General Principles
- **KISS**: Keep It Simple, Stupid
- **DRY**: Don't Repeat Yourself  
- **SOLID**: Single responsibility, Open-closed, Liskov substitution, Interface segregation, Dependency inversion
- **YAGNI**: You Aren't Gonna Need It

## Code Style

### Naming Conventions
- **Variables**: camelCase (`userName`, `isActive`)
- **Constants**: UPPER_SNAKE_CASE (`MAX_RETRY_COUNT`, `API_BASE_URL`)
- **Functions**: camelCase, descriptive verbs (`getUserData`, `validateEmail`)
- **Classes**: PascalCase (`UserService`, `DatabaseConnection`)
- **Files**: kebab-case (`user-service.js`, `email-validator.ts`)

### Code Organization
- Keep functions small (max 20 lines)
- One class per file
- Group related functionality in modules
- Separate business logic from presentation logic

### Comments & Documentation
- Write self-documenting code
- Add comments for complex business logic
- Document all public APIs
- Keep comments up-to-date with code changes

## Git Workflow

### Commit Messages
Follow conventional commits format:
```
type(scope): description

feat(auth): add OAuth2 integration
fix(api): resolve user validation bug
docs(readme): update installation instructions
refactor(utils): simplify date formatting
test(auth): add login flow tests
```

### Branch Naming
- `feature/feature-name`
- `fix/bug-description`
- `hotfix/critical-fix`
- `chore/maintenance-task`

## Code Review Guidelines

### Before Submitting
- [ ] Code follows style guidelines
- [ ] Tests are written and passing
- [ ] No console.log statements in production code
- [ ] Error handling is implemented
- [ ] Security considerations reviewed

### Review Checklist
- [ ] Code is readable and maintainable
- [ ] Business logic is correct
- [ ] Edge cases are handled
- [ ] Performance implications considered
- [ ] No obvious security vulnerabilities

## Testing Standards
- Write unit tests for all business logic
- Aim for 80%+ code coverage
- Use descriptive test names
- Follow AAA pattern (Arrange, Act, Assert)
- Mock external dependencies

## Security Guidelines
- Never commit sensitive data (API keys, passwords)
- Validate all user inputs
- Use parameterized queries for database operations
- Implement proper authentication and authorization
- Keep dependencies updated

## Performance Guidelines
- Profile before optimizing
- Avoid premature optimization
- Use appropriate data structures
- Implement caching where beneficial
- Monitor database query performance