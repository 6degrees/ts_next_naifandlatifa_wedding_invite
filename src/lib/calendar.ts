interface CalendarEvent {
  title: string;
  description: string;
  location: string;
  startTime: string;
  endTime: string;
}

export function generateICS(event: CalendarEvent): string {
  const formatDate = (date: string) => {
    return new Date(date).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  };

  return `BEGIN:VCALENDAR
VERSION:2.0
CALSCALE:GREGORIAN
BEGIN:VEVENT
SUMMARY:${event.title}
DTSTART:${formatDate(event.startTime)}
DTEND:${formatDate(event.endTime)}
LOCATION:${event.location}
DESCRIPTION:${event.description}
STATUS:CONFIRMED
SEQUENCE:0
END:VEVENT
END:VCALENDAR`;
}

export function downloadICS(event: CalendarEvent) {
  const icsContent = generateICS(event);
  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute('download', 'wedding-invitation.ics');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
} 