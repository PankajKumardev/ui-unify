export default function Page() {
  const sendPostRequest = async () => {
    const response = await fetch('/api/Gemini/route', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: 'Your prompt here' }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error:', errorData.error);
    } else {
      const data = await response.json();
      console.log('Response:', data.response);
    }
  };

  sendPostRequest();
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <header className="text-center mb-10">
        <h1 className="sm:text-4xl text-3xl font-bold text-gray-800 dark:text-gray-200">
          <span className="font-bold text-red-400">
            UÍ
            <span className="text-gray-800 dark:text-[#E7E9EC]">-Unify</span>
          </span>{' '}
          AI Components
        </h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mt-4">
          Create, customize, and integrate components effortlessly with our
          AI-powered tools.
        </p>
      </header>
      <div className="flex justify-center align">
        <div>
          <h1 className="text-4xl mt-10 font-semibold">
            What do you want to build?
          </h1>
          <p className="flex justify-center mt-2 text-gray-400">
            Prompt, run, edit, and deploy full-stack web apps.
          </p>
          <div className="mt-10 flex justify-center w-full">
            <textarea
              className="rounded-md w-full h-32 p-4 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400"
              placeholder="Enter your prompt here..."
              style={{ width: '100%' }}
              
            />
          </div>
        </div>
      </div>
    </div>
  );
}
