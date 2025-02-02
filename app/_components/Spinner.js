function Spinner() {
  return (
    <div className="flex justify-center items-center py-28">
      <div className="relative h-20 w-20">
        <div className="absolute inset-0 rounded-full border-4 border-primary-700 opacity-30" />
        <div className="absolute inset-0 rounded-full border-4 border-accent-500 border-t-transparent animate-spin" />
      </div>
    </div>
  );
}

export default Spinner;
