export default function About() {
    return (
      <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
        <div className="max-w-4xl mx-auto">
          {/* Page Title for SEO */}
          <h1 className="text-4xl font-bold mb-4 text-center">
            About CA Ninjas - Your Ultimate CA Exam Preparation Platform
          </h1>
  
          {/* Website Overview */}
          <p className="text-lg mb-4">
            Welcome to <strong>CA Ninjas</strong>, the go-to platform for **CA Students** 
            preparing for **CA Foundation, CA Inter, and CA Final** exams. Our mission is to 
            provide **high-quality study materials, past year questions (PYQ), revision test 
            papers (RTP), and mock test papers (MTP)** with step-by-step solutions, ensuring 
            that every CA aspirant achieves success.
          </p>
  
          {/* Why Choose CA Ninjas? */}
          <h2 className="text-2xl font-semibold mt-6">Why Choose CA Ninjas?</h2>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Comprehensive Study Resources:</strong> Access PYQs, RTPs, MTPs, and MCQs with solutions.</li>
            <li><strong>Structured Learning:</strong> We categorize CA study material for **CA Foundation, CA Inter, and CA Final**.</li>
            <li><strong>MCQ Practice:</strong> Improve your exam performance with unlimited **MCQ practice**.</li>
            <li><strong>Regular Updates:</strong> Stay up-to-date with the latest **ICAI syllabus and question papers**.</li>
            <li><strong>User-Friendly Interface:</strong> Our website is optimized for **mobile and desktop** for seamless study.</li>
          </ul>
  
          {/* Our Features */}
          <h2 className="text-2xl font-semibold mt-6">📚 Features of CA Ninjas</h2>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>📖 Past Year Questions (PYQ):</strong> Access **last 10 years' ICAI exam questions** with solutions.</li>
            <li><strong>📝 Mock Test Papers (MTP):</strong> Practice with **mock tests designed as per ICAI guidelines**.</li>
            <li><strong>📑 Revision Test Papers (RTP):</strong> Get **RTPs for CA Foundation, CA Inter, and CA Final**.</li>
            <li><strong>✅ MCQ Practice:</strong> Strengthen your concepts with topic-wise **MCQs and quizzes**.</li>
            <li><strong>📌 Free Study Materials:</strong> Access ICAI-provided **notes, RTPs, and practice manuals**.</li>
            <li><strong>🌍 Accessible Anytime, Anywhere:</strong> Study on the go with **CA Ninjas' mobile-friendly website**.</li>
          </ul>
  
          {/* CTA Section */}
          <div className="bg-yellow-400 p-6 rounded-lg shadow-md text-center text-gray-900">
            <h2 className="text-2xl font-bold">🚀 Start Your CA Journey with CA Ninjas Today!</h2>
            <p className="text-lg mt-2">Join thousands of **CA students** who trust CA Ninjas for exam preparation.</p>
            <a href="/" className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
              Explore Study Materials
            </a>
          </div>
        </div>
      </div>
    );
  }
  