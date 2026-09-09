(() => {
  const countdown = document.querySelector('[data-af27-countdown]');
  if (!countdown) return;

  // Count to the first calendar day in Zimbabwe; no opening hour is published yet.
  const start = Date.parse(countdown.dataset.start);
  const end = Date.parse(countdown.dataset.end);
  if (!Number.isFinite(start) || !Number.isFinite(end) || end <= start) return;

  const digits = countdown.querySelector('.af27-countdown__digits');
  const status = countdown.querySelector('.af27-countdown__status');
  const units = ['days', 'hours', 'minutes', 'seconds'];
  const values = units.map(unit => countdown.querySelector(`[data-unit="${unit}"]`));
  let interval;

  function update() {
    const now = Date.now();
    if (now >= start) {
      digits.hidden = true;
      status.hidden = false;
      const message = now < end ? 'The AFMOCON 2027 journey is underway.' : 'Thank you for being part of AFMOCON 2027.';
      if (status.textContent !== message) status.textContent = message;
      if (now >= end) clearInterval(interval);
      return;
    }

    digits.hidden = false;
    status.hidden = true;
    const remaining = Math.ceil((start - now) / 1000);
    const time = [Math.floor(remaining / 86400), Math.floor(remaining / 3600) % 24, Math.floor(remaining / 60) % 60, remaining % 60];
    values.forEach((element, index) => {
      const value = String(time[index]).padStart(2, '0');
      if (element.textContent !== value) element.textContent = value;
    });
  }

  update();
  if (Date.now() < end) interval = setInterval(update, 1000);
})();
