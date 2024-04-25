import React from 'react'

function Article({ title, date, preview, minutes }) {
    // Calculate emojis for "minutes to read" bonus feature
    const emojis = minutes < 30
      ? '☕️'.repeat(Math.ceil(minutes / 5))
      : '🍱'.repeat(Math.ceil(minutes / 10));
  
    // Default date if not provided
    const formattedDate = date || "January 1, 1970";
  
    return (
      <article>
        <h3>{title}</h3>
        <small>{formattedDate}</small>
        <p>{preview}</p>
        <small>{emojis} {minutes} min read</small>
      </article>
    );
  }

export default Article
