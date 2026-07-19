# Notes

## 1. Which parts did you build with AI assistance, and where did you have to correct, override, or rewrite what it produced?

I used AI as a development assistant to speed up implementation and reduce boilerplate code. AI helped generate initial React component structures, form layouts, API integration patterns, and CSS suggestions.

However, several parts required manual corrections and implementation:

- Fixed API request and response mappings to match the backend.
- Corrected field names (for example, using `expense_date` instead of `date`).
- Updated frontend after backend schema changes.
- Implemented the CRUD logic and state management in `App.jsx`.
- Added validation for expense and category forms.
- Implemented the monthly budget feature and over-budget flagging.
- Fixed rendering issues, component props, and state synchronization.
- Corrected SQL queries and backend responses where AI assumptions did not match the actual database.
- Debugged runtime issues and handled edge cases during integration.

Overall, AI accelerated development, but the business logic, debugging, backend integration, and feature completion required manual work.

---

## 2. Briefly describe your database schema and one tradeoff you made in designing it.

The application uses two main tables.

### Categories

| Column | Description |
|--------|-------------|
| id | Primary Key |
| name | Category name |
| monthly_budget | Monthly spending limit |

### Expenses

| Column | Description |
|--------|-------------|
| id | Primary Key |
| amount | Expense amount |
| description | Expense description |
| category_id | Foreign Key to Categories |
| expense_date | Date of expense |

A one-to-many relationship exists between Categories and Expenses.

One category can have many expenses.

### Tradeoff

Instead of storing redundant category information inside every expense record, only the `category_id` is stored.

When displaying expenses, the backend performs a SQL JOIN to retrieve the category name.

This slightly increases query complexity but keeps the database normalized and avoids duplicated data.

---

## 3. What would break first if this app had to handle ~1,000,000 expenses, and what would you change?

The first bottleneck would be loading every expense into the frontend.

Currently the application fetches all expenses and performs searching on the client side. With one million records this would result in:

- Slow API responses
- Large memory usage
- Long page load times
- Poor browser performance

To support large datasets, I would implement:

- Server-side pagination
- Server-side search
- Date range filtering
- Indexed database columns on `expense_date`, `category_id`, and `description`
- Aggregate SQL queries for summary calculations instead of processing large datasets on the frontend
- Response caching for frequently requested summary data

These changes would allow the application to scale much more efficiently.

---

## 4. What did you deliberately simplify or leave out given the time limit, and why?

Given the assignment timeline, I prioritized implementing the core functionality over additional features.

Some features that could be added in a production version include:

- Pagination
- Date range filtering
- Sorting by amount or date
- Authentication and user accounts
- Dashboard charts and visual analytics
- Export to CSV/PDF
- Responsive mobile optimizations
- Advanced validation and error handling
- Soft delete and audit history
- Unit and integration testing

The goal was to deliver a complete, functional CRUD application with a clean architecture and a good user experience rather than partially implementing many advanced features.