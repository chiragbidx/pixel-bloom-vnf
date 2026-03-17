# Changelog

## 2024-06-11

### Added
- Implemented production-ready dashboard pages:
  - **Analytics**: Server and client components, stub actions, basic metrics cards.
  - **Billing**: Server and client components, plan summary, invoices section.
  - **Integrations**: Server and client components, placeholder integration cards.
  - **Team Users**: Server and client components, member list, actions stub.
- Updated Sidebar Navigation to include new dashboard pages:
  - Analytics, Billing, Integrations, Team Users.
- All new pages now follow Next.js app router conventions and use shadcn/ui for UI.
- All new pages and actions files are ready for future server-side integration with real data.

## 2024-06-12

### Added
- New dashboard sections for a full SaaS experience:
  - **Notifications**: See system and team notifications.
  - **Activity Log**: Track recent account and system actions.
  - **API Keys**: Manage programmatic access to the workspace.
  - **Help/Documentation**: Quick access to guides and support.
- Updated sidebar navigation to show all above pages under Account.
- Placeholder UI and server actions added for each new feature—ready for future DB and business logic wiring.

## 2024-06-13

### Added
- Core CRM dashboard pages for a complete suite:
  - **Reports**: Insights on CRM activity and performance.
  - **Notes**: Internal notes for leads, clients, or deals.
  - **Activities**: Manage workflow and track scheduled events.
  - **Deals**: Monitor deal flow and status.
  - **Contacts**: List and update people/relationships.
  - **Clients**: Companies you serve or track.
- Updated SidebarNav to include all new CRM pages under the CRM section.
- Implemented placeholder UI and server actions for each page for future feature integration.

## 2024-06-14

### Fixed
- Replaced invalid `Pipeline` icon import from `lucide-react` in `LayoutFeatureGridSection.tsx` with the supported `PenLine` icon to resolve build errors.

## 2024-06-14

### Added
- Fully implemented production-level Clients page in dashboard with full CRUD:
  - Added Drizzle schema, migration, and journaling for clients table.
  - Built server actions for list, add, edit, delete clients with zod validation and auth guards.
  - Upgraded page and client component to support viewing, adding, editing, and deleting clients with live updates and error handling.

## 2024-06-14

### Fixed
- Refactored dashboard Clients page to avoid invalid `"use server"` import usage. Client list query is now run directly in `page.tsx`, and server actions only export form actions, per Next.js best practices and App Router conventions.

## 2024-06-14

### Changed
- Upgraded dashboard Clients page: now all signed-in users (any role) can add or edit clients.
- Switched add/edit client form UI from a sidebar sheet to a centered modal dialog for simpler, more standard UX.
- Retained robust validation, error feedback, and differentiated modal titles for add vs edit flows.
[/list]