"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something went wrong with question navigation helper!</h2>
      <button onClick={() => reset()}>Please try again</button>
      <p>{error.message}</p>
    </div>
  );
}
