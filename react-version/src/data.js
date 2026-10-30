// All page content lives here, so the components only handle layout.
export const reviews = [
  { text: '“I used to keep tasks in five different apps. Now everything lives in one calm place.”', name: 'M. Tahsin Nusrat Labiba', role: 'Computer science student' },
  { text: '“The daily view tells me exactly what to start with. I finish my work before lunch now.”', name: 'Saikat Shahriar', role: 'Freelance web developer' },
  { text: '“Our team stopped missing deadlines in the first two weeks. Setup took five minutes.”', name: 'Asmaul Husna', role: 'Project manager' },
]

export const plans = [
  { name: 'Free', price: '$0', per: ' /month', blurb: 'For personal to-do lists.', cta: 'Start free',
    items: ['Up to 3 projects', 'Due dates and reminders', 'Mobile and web apps'] },
  { name: 'Pro', price: '$6', per: ' /month', blurb: 'For anyone with a busy schedule.', cta: 'Choose Pro', popular: true,
    items: ['Unlimited projects', 'Progress insights', 'Recurring tasks', 'File attachments'] },
  { name: 'Team', price: '$12', per: ' /user/month', blurb: 'For groups working together.', cta: 'Choose Team',
    items: ['Everything in Pro', 'Shared projects', 'Assign tasks to people', 'Priority support'] },
]
