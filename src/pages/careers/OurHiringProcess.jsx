import React, { useEffect, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa';
import Navbar from "../../components/Navbar"
import Footer from "../Footer"
import images from '../../assets/images'
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
const accordionData = [
  {
    title: 'Learning and Development',
    content: 'Tell me and I’ll forget, teach me and I may remember, involve me and I learn”. Now, we may not be able to tell if Benjamin Franklin did in fact utter these words, but they do explain how you will experience our culture. At Vpearl, from tuition reimbursement to industry conferences, you can leverage diverse learning opportunities for career progression as well as personal development'
  },
  {
    title: 'Feedback is Fuel',
    content: 'Sometimes, you achieve success, and other times, you get schooled. While the latter may not be fun, it’s often the best way to propel growth. At Vpearl, we have monthly supervisor connects to help our geeks continuously discover their strengths and uncover any blind spots hindering their progress.'
  },
  {
    title: 'Health is Wealth',
    content: 'A dated saying but how true do these words ring! We are nothing without our people. Apart from conducting in-house wellness programs, our geeks receive support through our health insurance scheme.'
  },
  {
    title: 'Meritocracy',
    content: 'Appreciation delayed is appreciation denied! In addition to establishing an upright compensation system, we ensure timely promotions for meritorious talents.'
  },
  {
    title: 'Autonomy',
    content: 'Deadlines are not dictated here, but directed by the squad themselves. Each team owns a set of deliverables, and they decide how best these can to be actioned to benefit our clients. We are big on innovation and support our geeks who may want to work on product ideas or execute business proposals. In short, at Vpearl, you could be potentially filing co-patents for your ideas!'
  },
  {
    title: 'Our Squad is Our Community',
    content: 'We take great pride in welcoming new geeks into our space. We celebrate inclusivity and open dialogues. Do not shy away from reaching out to us if just because you’re a novice. With our team of experts from different fields; you cannot remain a noob for long. More importantly, at Vpearl, you will find a helping hand anytime you seek it.'
  },
  {
    title: 'Human Before Resource',
    content: 'Fulfilment is all about keeping the balance. It is why Emily’s leave application for another solo-trip gets as much importance as John’s, who wants to spend a long weekend with his partner and kids. Our geeks come from different walks of life and we make sure each of them feels appreciated and supported. To this end, we have instituted a transparent leave management system.'
  }
];

function OurHiringProcess() {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const handlecareer=()=>{
    navigate("/careers/opening");
  }
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

  return (
    <>
      <Navbar />
      <div
        style={{ marginTop: '90px' }}
        className="flex flex-col md:flex-row items-center justify-between px-8 py-16 mx-auto max-w-[1200px] gap-8"
      >
        {/* Text Section */}
        <div className="md:w-1/2 cinzel-body">
          <h2 className="text-3xl font-bold text-pink-600 mb-4 cinzel-body">
            Build your future with us! <br /> Literally!!
          </h2>
          <p
            className="text-gray-700 leading-relaxed text-justify"
            style={{ color: 'rgb(69, 44, 72)', textJustify: 'inter-word' }}
          >
            At Vpearl, we are in the business of devising sustainable solutions across
            industries, for a better tomorrow. We are on a path that breeds
            opportunities to challenge traditional assumptions about societies and
            businesses. Our squad comprises of critical-thinking and problem-solving
            engineers from different fields, who work together to build viable
            alternatives for the unmanageable, conventional conveniences. With us, you
            must question, you must collaborate and, in that process, you will
            discover yourself learning and leading change! Live your fullest, as an
            engineer, at Vpearl where we empower people and businesses to
            recognize the better choice today.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src={images.hiringprocess.HR}
            alt="Team Photo"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="bg-black text-white w-full min-h-[15rem] flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 shadow-lg">
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 animate-pulse">Hi There</h1>
          <p className="text-gray-400 max-w-lg text-sm md:text-base mx-auto mb-4">
            Experience something extraordinary at our upcoming events – don't miss out on this remarkable opportunity!
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition duration-300">
            Check Events
          </Button>
        </div>
      </div>

      <div
        style={{ marginTop: '20px' }}
        className="flex flex-col md:flex-row items-center justify-between px-8 py-6 mx-auto max-w-[1200px] gap-8"
      >
        {/* Image Section */}
        <div className="w-80">
          <img
            src={images.hiringprocess.HRP}
            alt="Team Photo"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 cinzel-body">
          <h2 className="text-3xl font-bold text-pink-600 mb-4 cinzel-body">
            Our Community Blueprint
          </h2>
          <p
            className="text-gray-700 leading-relaxed text-justify"
            style={{ color: 'rgb(69, 44, 72)', textJustify: 'inter-word' }}
          >
            We appreciate that a 9-to-5 brings in a certain kind of structure that many may crave. However, we are in the business of driving impact, and breakthroughs cannot be scheduled. In fact, let’s just put it straight out there: incurious yes-men don’t last long here.
          </p>
          <p className="text-gray-700 leading-relaxed text-justify"
            style={{ color: 'rgb(69, 44, 72)', textJustify: 'inter-word' }}>
            Our community is based on the foundations of integrity, intimacy and innovation. Ideas can crop up from anywhere but it is the commitment of our people to collaborate and work across their departmental divisions, which advances a concept into completion. So, you see, we simply cannot offer monotony, but here is what we can promise you in our community:</p>
        </div>


      </div>
      <div className="max-w-5xl mx-auto mt-8 space-y-4">
        {accordionData.map((item, index) => (
          <div key={index} className="border border-gray-100 rounded-lg shadow-md">
            <button
              className="w-full flex justify-between items-center px-6 py-4 bg-white text-gray-800 hover:bg-gray-100 transition duration-300"
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-lg font-semibold">{item.title}</span>
              <FaChevronDown
                className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                  } text-gray-500`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40' : 'max-h-0'
                }`}
            >
              <div className="px-6 py-4 text-gray-700 bg-gray-50">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white py-12 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Heading Section */}
          <h2 className="text-2xl font-bold text-pink-600 mb-4 cinzel-heading">
            Our Hiring Process
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxedcinzel-body" style={{ color: 'rgb(69, 44, 72)' }} >
            Our hiring process is not merely a question of team additions, it is an extension of our culture. Whether you have applied for a position directly on the website or through employment platforms, ensure that your resume is updated. Our Geek Discovery team takes a deep dive into these sheets, so you would want to showcase experiences that are relevant to the job description. The more specifics you provide about your past projects, the better!
          </p>
          <p className="text-gray-700 mb-12 leading-relaxedcinzel-body" style={{ color: 'rgb(69, 44, 72)' }}>
            The recruitment process might vary from role to role, but in general, this is how we assess candidates:
          </p>

          {/* Process Steps */}
          <div className="space-y-8">
            {/* Step 1 */}
            <div>
              <h3 className="text-lg font-bold text-pink-600 cinzel-heading ">
                Get Ready for a Fun First Discussion!
              </h3>
              <p className="text-gray-700 mt-2cinzel-body" style={{ color: 'rgb(69, 44, 72)' }}>
                For a start, we’ll have a chat about your goals and interests. This is your moment to shine and ask us anything. We love to keep things fresh and engaging, so we offer some unique discussion formats for you:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2 ml-4 ">
                <li>
                  <span className="font-semiboldcinzel-body" style={{ color: 'rgb(69, 44, 72)' }}>Walking Discussion:</span> Stroll and chat – over a cup of coffee.
                </li>
                <li>
                  <span className="font-semiboldcinzel-body" style={{ color: 'rgb(69, 44, 72)' }}>Peer Discussion:</span> Meet a future teammate and see if there’s a spark.
                </li>
                <li>
                  <span className="font-semiboldcinzel-body" style={{ color: 'rgb(69, 44, 72)' }}>Silent Discussion:</span> Here’s your chance to get disorganized to organize.
                </li>
              </ul>
            </div>

            {/* Step 2 */}
            <div>
              <h3 className="text-lg font-bold text-pink-600 cinzel-heading">
                Next Up: The Technical Discussion
              </h3>
              <p className="text-gray-700 mt-2cinzel-body" style={{ color: 'rgb(69, 44, 72)' }}>
                Talk to one of our Geeks about your technical expertise. It’s the perfect time to highlight your strengths and discuss what you do best.
              </p>
            </div>

            {/* Step 3 */}
            <div>
              <h3 className="text-lg font-bold text-pink-600 cinzel-heading">
                Time for the Technical Assessment
              </h3>
              <p className="text-gray-700 mt-2cinzel-body" style={{ color: 'rgb(69, 44, 72)' }}>
                Get set to challenge yourself and validate your skills with our technical assessment.
              </p>
            </div>

            {/* Step 4 */}
            <div>
              <h3 className="text-lg font-bold text-pink-600 cinzel-heading">
                The Final Senior Leadership Meet
              </h3>
              <p className="text-gray-700 mt-2cinzel-body" style={{ color: 'rgb(69, 44, 72)' }}>
                You’re just one step away from becoming a Geek of our Tribe. Connect with our leadership team for a final discussion!
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-12 flex justify-center">
          
            <Button onClick={() => handlecareer()}> Check out Careers</Button>
          </div>
        </div>
      </div>



      <div ><Footer /></div>
    </>
  )
}

export default OurHiringProcess