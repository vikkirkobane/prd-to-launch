# RAPID Response Team One - Claude Project Guide

## Project Overview

**Project Name:** RAPID Response Team One Platform  
**Organization:** One Planet One People  
**Project Type:** Web-based competitive volunteer/internship program platform  
**Current Phase:** Pre-Development (Month 0)  
**Primary Goal:** Create a scalable digital platform for competitive sustainability project completion with performance tracking, recognition, and employment pathways

## Core Concept

RAPID Response Team One is a transformative competitive program where volunteers, interns, and students complete real-world sustainability projects to:
- Earn performance points through a multi-factor scoring system
- Compete for monthly and quarterly recognition
- Build portfolios for career advancement
- Access employment opportunities with One Planet One People
- Contribute to UN Sustainable Development Goals (SDGs)

**RAPID Acronym:** Research • Action • Persistent • Insistent • Deliverables

## Key Stakeholders

- **Lyle Benjamin** - Founder, One Planet One People (strategic oversight, thought leadership)
- **Participants** - Volunteers, interns, students (global, remote, ages 15-35+)
- **Partner Organizations** - Universities, corporations, NGOs providing and evaluating projects
- **Development Team** - Product manager, developers, project curators, marketing

## Technical Architecture

### Technology Stack (Recommended)

**Frontend:**
- React.js or Vue.js for responsive web application
- Progressive Web App (PWA) capabilities for mobile-first experience
- Tailwind CSS for consistent, modern design system
- Mobile-responsive (all features accessible on mobile)

**Backend:**
- Node.js or Python (Django/Flask) for scalable API
- RESTful API architecture
- PostgreSQL or MongoDB for data persistence
- JWT-based authentication

**Infrastructure:**
- Cloud hosting (AWS, Google Cloud, or Azure)
- CDN for global content delivery
- Docker containerization for deployment
- CI/CD pipeline for automated testing and deployment

**Third-Party Integrations:**
- **Payment Processing:** Stripe (primary) for $35 administration fee
- **Email Marketing:** SendGrid or similar for transactional and marketing emails
- **File Storage:** Cloudinary or AWS S3 for images, documents, deliverables
- **Analytics:** Google Analytics for usage tracking
- **Social Media:** LinkedIn, Facebook, Instagram, Twitter APIs for sharing

**Critical Constraint:** NEVER use localStorage or sessionStorage - not supported in deployment environment. Use React state or backend persistence only.

### Platform Architecture Components

#### 1. User Management System
- Multi-tenant architecture (individual + organizational accounts)
- Role-based access control: Participant, Evaluator, Admin, Org Admin
- Secure authentication (JWT tokens, password hashing)
- Profile management: bio, skills, headshot upload, performance history
- Terms & Conditions digital signature with version tracking

#### 2. Project Management Module
- Project CRUD operations with rich text editor
- Project categorization: SDG tags, difficulty level, timeframe, point value
- First-come-first-served registration (max 4 participants per project)
- Project states: Open → Registered → In Progress → Submitted → Evaluated → Completed
- Document upload for deliverables (multiple file types, size limits)
- Deadline tracking with countdown timers
- Evaluator assignment workflow

#### 3. Points and Performance Engine
**Scoring Factors:**
1. Successfully Achieving Objective (40% weight)
2. Proper use of AIM/PMOROS Systems (25% weight)
3. Impact (25% weight)
4. Timeframe for Completion (10% weight)

**Penalty System:**
- If member completes 10+ projects in a month but places (1st/2nd/3rd) in fewer than 2 projects: -10 points per project over 10
- Example: 12 projects, 1 placement = -20 points

**Key Features:**
- Real-time leaderboard (monthly and quarterly views)
- Historical performance tracking and analytics
- Point calculation automation with transparency
- Export capabilities for reporting

#### 4. Recognition and Rewards Module
- Automated certificate generation (PDF with custom branding)
- Digital badge creation (compatible with LinkedIn)
- Email notifications for awards
- Public recognition feed with privacy controls
- Discretionary bonus tracking (admin-controlled)
- Social media sharing integration

**Recognition Criteria:**
- **Monthly:** Top 3 if minimum 12 projects completed program-wide that month
- **Quarterly:** Top 3 if minimum 30 projects completed program-wide that quarter

#### 5. Training and Compliance System
- LMS for AIM and PMOROS training modules
- Progress tracking and completion certificates
- Embedded compliance checklists within project workflows
- Reference library with searchable resources
- Required training before first project participation

#### 6. Analytics and Reporting Dashboard
- Participant performance metrics and trends
- Project completion rates and quality scores
- Team/organizational reporting (for organizational partners)
- SDG impact tracking across all projects
- Export capabilities for ESG reporting
- Predictive analytics for retention risk

#### 7. Payment Processing
- Secure payment gateway integration (Stripe)
- One-time $35 USD administration fee collection
- Organizational licensing payment processing (custom pricing)
- Receipt generation and email delivery
- Refund management workflow (if needed)

## Database Schema (Core Entities)

### Users
```
- id (UUID)
- email (unique, encrypted)
- password_hash
- role (enum: participant, evaluator, admin, org_admin)
- first_name, last_name
- headshot_url
- bio
- profile_status (enum: pending, active, disqualified)
- organization_id (foreign key, nullable)
- created_at, updated_at
- terms_accepted (boolean)
- terms_version
- last_login
```

### Projects
```
- id (UUID)
- title
- description (rich text)
- sdg_tags (array)
- difficulty_level (enum: beginner, intermediate, advanced)
- estimated_hours
- deadline
- max_participants (default: 4)
- current_participants (calculated)
- point_value_objective (integer)
- point_value_systems (integer)
- point_value_impact (integer)
- point_value_timeframe (integer)
- status (enum: draft, open, in_progress, closed, archived)
- project_brief_url
- aim_pmoros_checklist (JSON)
- partner_organization_id (foreign key)
- created_by (foreign key to Users)
- created_at, updated_at
```

### Project_Registrations
```
- id (UUID)
- project_id (foreign key)
- user_id (foreign key)
- registered_at
- submission_date
- deliverable_urls (array)
- status (enum: registered, working, submitted, evaluated)
- points_earned (calculated after evaluation)
- evaluator_id (foreign key to Users)
- evaluation_date
- evaluation_notes (rich text)
- score_objective (0-100)
- score_systems (0-100)
- score_impact (0-100)
- score_timeframe (0-100)
- placement (nullable: 1, 2, 3, or null)
```

### Performance_Records
```
- id (UUID)
- user_id (foreign key)
- period_type (enum: monthly, quarterly)
- period_start, period_end
- total_points
- projects_completed
- projects_placed (count of 1st/2nd/3rd finishes)
- rank (nullable: 1, 2, 3, or null)
- certificate_issued (boolean)
- certificate_url
- bonus_awarded (decimal, nullable)
```

### Organizations
```
- id (UUID)
- name
- organization_type (enum: university, corporation, ngo, other)
- contact_email
- license_type (enum: individual_team, custom)
- team_size_limit (integer)
- active (boolean)
- created_at, updated_at
```

### Training_Progress
```
- id (UUID)
- user_id (foreign key)
- module_id (string: aim_intro, pmoros_basics, etc.)
- completed (boolean)
- completed_at
- score (0-100, for assessments)
```

## Key Features and User Flows

### 1. New User Onboarding
**Flow:**
1. Land on marketing page → "Join RAPID Response Team"
2. Registration form: email, password, name, upload headshot
3. Profile creation: bio, skills, interests (optional but encouraged)
4. Terms & Conditions review and digital signature
5. Payment processing ($35 via Stripe)
6. Welcome email with credentials and next steps
7. Platform orientation tour (interactive tooltips)
8. Required AIM and PMOROS training (must complete before project access)
9. First project selection with guided recommendations

**Design Considerations:**
- Progress bar showing onboarding completion (8 steps)
- Mobile-optimized forms with clear field validation
- Headshot upload with preview and crop functionality
- Secure payment form with multiple payment methods
- Training estimated at 2-3 hours with checkpoint saves

### 2. Weekly Project Selection
**Flow:**
1. Monday morning email: "New Projects Available This Week!"
2. User logs in to platform
3. Browse project marketplace with filters: SDG, difficulty, timeframe, points
4. Click project card to view full details
5. Review: description, deliverables, AIM/PMOROS requirements, deadline, points breakdown
6. Check spots remaining (visual indicator: 4/4, 3/4, 2/4, 1/4, FULL)
7. Click "Register for This Project" button
8. Confirmation modal: "You're registered! Project materials are now available."
9. Access project workspace with brief, templates, resources

**Design Considerations:**
- Real-time updates on spots remaining (WebSocket or polling)
- "Favorite" heart icon to bookmark projects for later
- Filter persistence (remember user's last filter settings)
- Visual differentiation for difficulty levels (color coding)
- One-click registration with clear success confirmation

### 3. Project Execution and Submission
**Flow:**
1. Access dedicated project workspace
2. Download project brief and templates
3. Work through AIM/PMOROS compliance checklist (progressive disclosure)
4. Upload work-in-progress (optional, for self-tracking)
5. Upload final deliverables before deadline (multiple files supported)
6. Confirm submission with acknowledgment of completeness
7. Receive email confirmation with submission details
8. Track evaluation status (notification when evaluation begins and completes)
9. View detailed evaluation results: scores, placement, points earned, feedback

**Design Considerations:**
- Prominent deadline countdown in project workspace
- Drag-and-drop file upload with progress indicators
- Checklist shows completion percentage
- Warning if submitting close to deadline
- Autosave for any text inputs
- Email reminders: 48 hours before, 24 hours before, 4 hours before deadline

### 4. Performance Tracking and Leaderboard
**Flow:**
1. Access "My Performance" dashboard from main navigation
2. View current month leaderboard with real-time rankings
3. See personal stats: total points, projects completed, avg score, current rank
4. Toggle between monthly and quarterly leaderboards
5. Click competitor profiles to see their public achievements (not scores)
6. Receive notifications for: new 1st/2nd/3rd placement, monthly/quarterly awards
7. Download certificates from achievements page
8. Share achievements on social media (one-click with pre-populated content)

**Design Considerations:**
- Gamified leaderboard with avatars and animated rank changes
- Personal performance graph showing trends over time
- Privacy toggle: show/hide profile from public leaderboard
- Celebration animations when earning achievements
- Mobile-optimized leaderboard (swipe to see more columns)
- Downloadable certificates in PDF and PNG formats

### 5. Disqualification and Re-Entry
**Flow:**
1. System checks at month end: Did user place top 3 in any project?
2. If NO and it's their 2nd or 3rd month of quarter → disqualification triggered
3. Email notification: "Your RAPID Team Status" with explanation
4. User retains all earned certificates and recognition
5. Platform access changes to read-only (view past work, leaderboards)
6. Option to reapply: "Rejoin RAPID Team" button
7. Re-entry requires new profile review (not new payment)
8. Restored to active status for next month if approved

**Design Considerations:**
- Clear, empathetic messaging in disqualification email
- Highlight achievements earned (not punitive tone)
- Easy re-application process (one-click initiation)
- FAQ link explaining disqualification rules
- Option to provide feedback on experience

## Design System

### Color Palette
- **Primary Green:** #2D6A4F (sustainability, growth)
- **Secondary Blue:** #1B4965 (trust, stability)
- **Accent Coral:** #FF6B6B (urgency, action, energy)
- **Success Green:** #51CF66 (achievements, completion)
- **Warning Amber:** #FFB84D (deadlines, attention)
- **Neutral Gray:** #F1F3F5 (backgrounds)
- **Text Dark:** #212529 (primary text)
- **Text Light:** #868E96 (secondary text)

### Typography
- **Headings:** Poppins (Bold 600-700) - modern, confident
- **Body:** Inter (Regular 400, Medium 500) - highly readable
- **Monospace:** Fira Code (for code snippets if needed)

### Component Library
- Buttons: Primary (coral), Secondary (outline), Tertiary (text-only)
- Cards: Elevated shadows, rounded corners (8px)
- Forms: Clear labels, floating placeholders, inline validation
- Modals: Centered overlay, animated entrance
- Notifications: Toast messages (top-right), persistent banners (top)
- Progress bars: Animated gradient fills
- Avatars: Circular, fallback initials
- Badges: Rounded rectangles for SDG tags, achievements

### Responsive Breakpoints
- Mobile: < 768px (single column, stacked navigation)
- Tablet: 768px - 1024px (two columns, collapsible sidebar)
- Desktop: > 1024px (full layout, persistent sidebar)

### Accessibility
- WCAG 2.1 AA compliance minimum
- Color contrast ratios: 4.5:1 for text, 3:1 for UI components
- Keyboard navigation: Tab order, Enter/Space for actions, Escape for modals
- Screen reader optimization: Semantic HTML, ARIA labels, alt text
- Focus indicators: Visible outline on all interactive elements

## Business Rules and Logic

### Project Registration Rules
- Maximum 4 participants per project (first-come-first-served)
- User can register for unlimited projects per month
- Cannot unregister once registered (commitment enforcement)
- Must have completed AIM/PMOROS training to register
- Cannot register if disqualified from team

### Scoring and Points
- Points only awarded after evaluation completion
- Evaluators score 0-100 on each of 4 factors
- Weighted calculation: (Objective×0.4) + (Systems×0.25) + (Impact×0.25) + (Timeframe×0.1)
- Top 3 scores per project receive 1st/2nd/3rd placement
- Late submissions: automatic -20% on Timeframe score per day late (up to -100% at 5 days)

### Point Penalty System
- Applies only if user completes 10+ projects in a month
- Must have 2+ placements (1st/2nd/3rd) to avoid penalty
- Penalty: -10 points per project over 10
- Example: 15 projects, 1 placement = 5 projects over 10 = -50 points
- Penalty applied at month-end before final rankings calculated

### Recognition Eligibility
- **Monthly Awards:** Top 3 only if ≥12 projects completed program-wide that month
- **Quarterly Awards:** Top 3 only if ≥30 projects completed program-wide that quarter
- Certificates auto-generated and emailed within 48 hours of month/quarter end
- Discretionary bonuses: Founder decision, no automated rules

### Disqualification Rules
- Applies in 2nd or 3rd month of any quarter
- Triggered if user has NO placements (1st/2nd/3rd) for any project that month
- Does NOT apply in 1st month of quarter (grace period)
- User retains all earned certificates and recognition
- Can reapply for next month membership

### Team Size Limits
- **Individual teams:** 20-35 members per team
- **Organizational teams:** Custom based on license agreement
- Teams divided by: organization, geography, age (future)
- Leaderboards calculated within team boundaries

## API Endpoints (Key Routes)

### Authentication
```
POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/logout
GET    /api/auth/me
POST   /api/auth/reset-password
```

### Users
```
GET    /api/users/:id
PUT    /api/users/:id
GET    /api/users/:id/performance
GET    /api/users/:id/projects
POST   /api/users/:id/headshot
```

### Projects
```
GET    /api/projects (with filters: sdg, difficulty, status)
GET    /api/projects/:id
POST   /api/projects (admin/evaluator only)
PUT    /api/projects/:id
DELETE /api/projects/:id
POST   /api/projects/:id/register
GET    /api/projects/:id/participants
```

### Registrations
```
GET    /api/registrations/:id
POST   /api/registrations/:id/submit
POST   /api/registrations/:id/deliverables (file upload)
GET    /api/registrations/:id/deliverables/:fileId
```

### Evaluations
```
POST   /api/evaluations (evaluator only)
PUT    /api/evaluations/:id
GET    /api/evaluations/pending (evaluator dashboard)
```

### Leaderboard
```
GET    /api/leaderboard/monthly/:year/:month
GET    /api/leaderboard/quarterly/:year/:quarter
GET    /api/leaderboard/team/:teamId
```

### Performance
```
GET    /api/performance/user/:userId
GET    /api/performance/calculate (cron job trigger)
POST   /api/performance/certificates/generate
```

### Training
```
GET    /api/training/modules
GET    /api/training/progress/:userId
POST   /api/training/complete/:moduleId
```

### Payments
```
POST   /api/payments/create-checkout
POST   /api/payments/webhook (Stripe webhook)
GET    /api/payments/receipt/:paymentId
```

## Security Considerations

### Authentication & Authorization
- JWT tokens with expiration (24 hours, refresh token for 30 days)
- Password requirements: min 8 chars, 1 uppercase, 1 lowercase, 1 number
- Bcrypt for password hashing (cost factor: 10)
- Role-based access control enforced at API and UI levels
- Rate limiting on auth endpoints (5 attempts per 15 minutes)

### Data Protection
- All API communication over HTTPS only
- Database encryption at rest
- Sensitive PII (email, payment info) encrypted in database
- File upload validation: type whitelist, size limits, virus scanning
- GDPR compliance: right to deletion, data portability, consent tracking
- Regular security audits and penetration testing

### Payment Security
- PCI DSS compliance via Stripe (no card data stored)
- Webhook signature verification
- Payment confirmation emails
- Refund request workflow with approval

## Performance Requirements

### Response Times
- Page load: < 2 seconds (initial)
- API responses: < 500ms (p95)
- File uploads: Progress indicators for >1MB files
- Leaderboard updates: < 1 second after score change

### Scalability Targets
- Support 1,000 concurrent users (Year 1)
- Support 10,000 concurrent users (Year 3)
- Handle 1,000 project registrations per day (Year 3)
- Store 100,000+ files in object storage (Year 3)

### Uptime and Reliability
- 99.5% uptime SLA (minimum)
- Automated backups: daily database, hourly file storage
- Disaster recovery plan: 4-hour RTO, 1-hour RPO
- Load balancing for high availability
- Monitoring and alerting (uptime, error rates, performance)

## Testing Strategy

### Unit Tests
- Backend: 80%+ code coverage for business logic
- Frontend: Test critical user flows and state management
- Test frameworks: Jest (JS), pytest (Python)

### Integration Tests
- API endpoint testing with mock database
- Third-party integration testing (Stripe test mode, email sandbox)
- Payment flow end-to-end testing

### E2E Tests
- Critical user journeys: Registration, project selection, submission, leaderboard
- Cross-browser testing: Chrome, Firefox, Safari, Edge
- Mobile responsive testing: iOS Safari, Android Chrome
- Test framework: Playwright or Cypress

### User Acceptance Testing
- Beta cohort testing (15-20 users, Month 0)
- Usability testing with diverse user segments
- Accessibility testing with assistive technologies
- Load testing before each major launch

## Development Phases

### Phase 1: MVP (Months 1-3)
**Goal:** Launch functional platform with 50-100 participants

**Features:**
- User registration and authentication
- Profile management with headshot upload
- Manual project posting (admin interface)
- Simple project marketplace with filtering
- Project registration (first-come-first-served, max 4)
- File upload for deliverables
- Basic points calculation (manual evaluation)
- Simple leaderboard (monthly only)
- Monthly certificate generation (manual)
- Payment processing ($35 fee)
- Email notifications (transactional only)

**Technical Debt Accepted:**
- Manual project curation and posting
- Manual evaluation and scoring
- No AIM/PMOROS system integration (PDF guides only)
- Basic analytics only
- No mobile app (responsive web only)

### Phase 2: Automation (Months 4-6)
**Goal:** Scale to 200-300 participants with automation

**Features:**
- Automated project posting workflow
- AIM/PMOROS checklist integration in project workspace
- Automated points calculation after evaluation submission
- Quarterly leaderboard and recognition
- Enhanced analytics dashboard
- Evaluator portal with evaluation queue
- Email marketing integration (newsletters, campaigns)
- Organizational team licensing (basic)
- Social media sharing integration

**Technical Improvements:**
- Background job processing (cron jobs for calculations)
- WebSocket for real-time leaderboard updates
- Improved caching strategy
- Database optimization and indexing

### Phase 3: Scale (Months 7-12)
**Goal:** Scale to 500-1,000 participants, launch organizational partnerships

**Features:**
- Mobile app (PWA)
- Advanced team divisions and competition structures
- Partner organization job board
- Alumni network features
- Peer mentorship matching
- Advanced gamification (badges, achievements, streaks)
- Comprehensive reporting for organizations
- API for partner integrations

**Technical Improvements:**
- Microservices architecture consideration
- Advanced caching (Redis)
- CDN optimization for global performance
- Machine learning for project recommendations

## Common Pitfalls to Avoid

1. **Over-complexity in MVP:** Focus on core competition loop first. Delay nice-to-have features.

2. **Ignoring mobile users:** 60%+ of traffic will be mobile. Design mobile-first, not desktop-first.

3. **Weak onboarding:** First-time user experience makes or breaks retention. Invest heavily in smooth onboarding.

4. **Unclear scoring:** Users must understand how points are calculated. Transparency builds trust.

5. **Technical debt in payment processing:** Payment bugs erode trust instantly. Test thoroughly, use established providers.

6. **Neglecting email notifications:** Email is primary engagement driver. Design comprehensive, well-timed notification system.

7. **Poor performance at scale:** Plan for growth from day one. Don't optimize prematurely, but architect for scalability.

8. **Insufficient testing of edge cases:** Disqualification rules, point penalties, tie-breaking logic—test thoroughly.

9. **Ignoring accessibility:** 15%+ of users have disabilities. Accessibility isn't optional.

10. **Weak security practices:** Security breaches destroy credibility. Implement security best practices from day one.

## Key Metrics to Track

### User Engagement
- Daily/Weekly/Monthly Active Users (DAU/WAU/MAU)
- Project participation rate (% of users selecting projects weekly)
- Project completion rate (% of registered projects completed)
- Average projects per user per month
- Time to first project registration after onboarding
- Session duration and frequency

### Quality and Performance
- Average project quality score (AIM/PMOROS compliance)
- Evaluator satisfaction with deliverables
- User satisfaction score (NPS)
- Average time to evaluation completion
- Dispute rate (evaluation appeals)

### Business Metrics
- New user registrations (weekly/monthly)
- Conversion rate (visitor → registered user)
- Acquisition cost per user
- Revenue (admin fees + organizational licenses)
- Churn rate (monthly disqualifications + voluntary exits)
- Reactivation rate (disqualified users who rejoin)

### Impact Metrics
- Total projects completed
- SDG coverage (projects across 17 goals)
- Partner organizations onboarded
- Employment placements from program
- Social media reach and engagement

## Integration Requirements

### Payment Processing (Stripe)
```javascript
// Example: Create Checkout Session
const session = await stripe.checkout.sessions.create({
  payment_method_types: ['card'],
  line_items: [{
    price_data: {
      currency: 'usd',
      product_data: {
        name: 'RAPID Response Team Membership',
        description: 'One-time administration fee',
      },
      unit_amount: 3500, // $35.00 in cents
    },
    quantity: 1,
  }],
  mode: 'payment',
  success_url: `${YOUR_DOMAIN}/onboarding/success?session_id={CHECKOUT_SESSION_ID}`,
  cancel_url: `${YOUR_DOMAIN}/onboarding/payment`,
  customer_email: user.email,
  metadata: {
    user_id: user.id,
    membership_type: 'individual',
  },
});
```

### Email Notifications (SendGrid)
**Required Email Templates:**
1. Welcome email (post-registration)
2. Payment confirmation
3. New projects available (Monday mornings)
4. Project registration confirmation
5. Deadline reminders (48h, 24h, 4h before)
6. Submission confirmation
7. Evaluation completed
8. Placement achieved (1st/2nd/3rd)
9. Monthly/quarterly certificate awarded
10. Disqualification notice
11. Re-entry invitation

### File Storage (Cloudinary or AWS S3)
- User headshots: max 5MB, formats: jpg/png, auto-resize to 400x400
- Project deliverables: max 50MB per file, multiple files allowed
- Certificates: PDF generation and storage
- Generated URLs with expiration for security

### Social Media Sharing
- Pre-populated share text for achievements
- Open Graph meta tags for rich previews
- LinkedIn credential badge integration (future)

## Deployment and DevOps

### Environments
- **Development:** Local development with hot-reload
- **Staging:** Production-like environment for pre-release testing
- **Production:** Live environment with monitoring and logging

### CI/CD Pipeline
1. Code commit to Git repository
2. Automated testing (unit + integration)
3. Build Docker containers
4. Deploy to staging environment
5. Run E2E tests on staging
6. Manual approval for production deployment
7. Deploy to production with zero-downtime strategy
8. Automated smoke tests
9. Monitoring alerts activated

### Monitoring and Logging
- Application Performance Monitoring (APM): New Relic or Datadog
- Error tracking: Sentry
- Log aggregation: CloudWatch or ELK stack
- Uptime monitoring: Pingdom or UptimeRobot
- User analytics: Google Analytics + Mixpanel

### Backup and Recovery
- Database backups: Daily full, hourly incremental
- File storage backups: Versioned with 30-day retention
- Configuration backups: Infrastructure as Code (Terraform)
- Recovery testing: Quarterly disaster recovery drills

## Documentation Requirements

### For Developers
- API documentation (OpenAPI/Swagger)
- Database schema documentation
- Setup and installation guide (README)
- Architecture decision records (ADRs)
- Code style guide and linting rules

### For Users
- User guide (getting started, key features)
- FAQ (comprehensive, searchable)
- AIM and PMOROS training materials
- Video tutorials (onboarding, project submission)
- Troubleshooting guide

### For Administrators
- Admin panel user guide
- Project curation best practices
- Evaluation guidelines
- System maintenance procedures
- Incident response playbook

## Priority Decision Framework

When faced with competing priorities or feature requests, use this framework:

### P0 - Critical (Ship Blocker)
- Core competition loop must work: Register → Complete → Submit → Evaluate → Score
- Payment processing must be secure and reliable
- Authentication and authorization must be secure
- Data integrity and security

### P1 - High Priority (MVP Required)
- User onboarding flow
- Project marketplace with registration
- Basic leaderboard (monthly)
- Email notifications (transactional)
- Mobile responsiveness

### P2 - Medium Priority (Post-MVP)
- AIM/PMOROS system integration
- Quarterly recognition
- Advanced analytics
- Social media sharing
- Organizational licensing

### P3 - Low Priority (Future Enhancements)
- Mobile app (PWA)
- Peer messaging
- Advanced gamification
- AI-powered recommendations
- Multi-language support

## Contact and Resources

**Project Documentation:**
- Full PRD: Available in project repository
- FAQ Document: "FAQs - RAPID Response Team One.docx"
- Original Program Doc: "RAPID Response Team One.docx"

**Key Contacts:**
- Founder: Lyle Benjamin (strategic decisions, thought leadership)
- Product Management: [TBD] (feature prioritization, roadmap)
- Development Lead: [TBD] (technical architecture, implementation)
- Operations: [TBD] (project curation, partner management)

**External Resources:**
- One Planet One People Website: https://oneplanet-onepeople.com
- UN Sustainable Development Goals: https://sdgs.un.org
- Book: "16 Things We Can Do to Act Right & Help Save the Planet!"

---

## Quick Start for Claude Code Sessions

When starting a new coding session on this project, Claude should:

1. **Review this document** to understand context, architecture, and requirements
2. **Ask clarifying questions** about which phase (MVP/Phase 2/Phase 3) is being built
3. **Confirm technology stack** preferences before generating code
4. **Follow security best practices** especially for authentication and payments
5. **Remember the localStorage constraint** - never use browser storage APIs
6. **Prioritize mobile-responsive design** - mobile-first approach
7. **Include accessibility features** - WCAG 2.1 AA compliance
8. **Write production-ready code** - not just prototypes or examples
9. **Provide clear documentation** - inline comments for complex logic
10. **Consider scalability** - even in MVP, avoid patterns that won't scale

**Default Assumptions (if not specified):**
- Building Phase 1 (MVP) features
- React + Node.js + PostgreSQL stack
- Deployment to AWS or similar cloud platform
- Tailwind CSS for styling
- Jest for testing

**Always Ask First:**
- Which specific feature or user flow are we building?
- What phase are we in (MVP vs. later phases)?
- Are there specific technical constraints or preferences?
- Should this integrate with existing code or start fresh?

---

*This guide is a living document. Update it as the project evolves, architectural decisions change, or new requirements emerge.*

**Document Version:** 1.0  
**Last Updated:** October 21, 2025  
**Next Review:** Monthly during development phase