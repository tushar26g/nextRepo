import Link from "next/link";

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
          Welcome to <strong>CA Ninjas</strong>, the go-to platform for <strong>CA Students</strong> 
          preparing for <strong>CA Foundation, CA Inter, and CA Final</strong> exams. Our mission is to 
          provide <strong>high-quality study materials, past year questions (PYQ), revision test 
          papers (RTP), and mock test papers (MTP)</strong> with step-by-step solutions, ensuring 
          that every CA aspirant achieves success.
        </p>

        {/* Why Choose CA Ninjas? */}
        <h2 className="text-2xl font-semibold mt-6">Why Choose CA Ninjas?</h2>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>Comprehensive Study Resources:</strong> Access PYQs, RTPs, MTPs, and MCQs with solutions.</li>
          <li><strong>Structured Learning:</strong> We categorize CA study material for <strong>CA Foundation, CA Inter, and CA Final</strong>.</li>
          <li><strong>MCQ Practice:</strong> Improve your exam performance with unlimited <strong>MCQ practice</strong>.</li>
          <li><strong>Regular Updates:</strong> Stay up-to-date with the latest <strong>ICAI syllabus and question papers</strong>.</li>
          <li><strong>User-Friendly Interface:</strong> Our website is optimized for <strong>mobile and desktop</strong> for seamless study.</li>
        </ul>

        {/* Our Features */}
        <h2 className="text-2xl font-semibold mt-6">📚 Features of CA Ninjas</h2>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>📖 Past Year Questions (PYQ):</strong> Access <strong>last 10 years&apos; ICAI exam questions</strong> with solutions.</li>
          <li><strong>📝 Mock Test Papers (MTP):</strong> Practice with <strong>mock tests designed as per ICAI guidelines</strong>.</li>
          <li><strong>📑 Revision Test Papers (RTP):</strong> Get <strong>RTPs for CA Foundation, CA Inter, and CA Final</strong>.</li>
          <li><strong>✅ MCQ Practice:</strong> Strengthen your concepts with topic-wise <strong>MCQs and quizzes</strong>.</li>
          <li><strong>📌 Free Study Materials:</strong> Access ICAI-provided <strong>notes, RTPs, and practice manuals</strong>.</li>
          <li><strong>🌍 Accessible Anytime, Anywhere:</strong> Study on the go with <strong>CA Ninjas&apos; mobile-friendly website</strong>.</li>
        </ul>

        {/* CTA Section */}
        <div className="bg-yellow-400 p-6 rounded-lg shadow-md text-center text-gray-900">
          <h2 className="text-2xl font-bold">🚀 Start Your CA Journey with CA Ninjas Today!</h2>
          <p className="text-lg mt-2">Join thousands of <strong>CA students</strong> who trust CA Ninjas for exam preparation.</p>
          <Link href="/">
            <span className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition cursor-pointer">
              Explore Study Materials
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
