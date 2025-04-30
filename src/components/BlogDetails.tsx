import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Blogdetails.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import images
import first from './assets/Johari.jpg';
import second from './assets/image.png';
import third from './assets/cv1.jpg';
import fourth from './assets/cv2.png';
import five from './assets/portfolio.jpg';
import six from './assets/portfolio2.jpg';
import seven from './assets/email.jpg';
import eight from './assets/EMAIL2.jpg';
import nine from './assets/Black_Doodle_Tools_for_Generating_Ideas_Mind_Map[1].png';
import ten from './assets/1.pdf';
import image7 from './assets/7.jpg';
import image5 from './assets/5.jpg';
import image8 from './assets/work.jpg';
import image9 from './assets/work2.jpg';
import din2 from './assets/din2.jpg';
import din3 from './assets/din3.jpg';
import negotiationImage from './assets/nego.jpg';

type BlogPost = {
  id: number;
  content: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    content: `
      <section class="container mt-5" data-aos="fade-up">
        <h1 class="text-center fw-bold text-primary" style="font-size: 2.3rem;" data-aos="fade-up" data-aos-delay="100">Introduction to Professional Skills</h1>
        <p class="text-center text-muted" data-aos="fade-up" data-aos-delay="200">By Miss Ishara Raviharee Weerasinghe</p><br>
        <p class="fs-5 text-dark" style="font-size: 1.4rem;" data-aos="fade-up" data-aos-delay="300">
          In this lecture, we explored various professional skills and their importance in the modern workplace. Key topics discussed include:
        </p>
        <ul class="list-unstyled text-start d-inline-block" style="font-size: 1.3rem;" data-aos="fade-up" data-aos-delay="400">
          <li><i class="bi bi-check-circle-fill text-success"></i> <b>What are Professional Skills?</b></li>
          <li><i class="bi bi-check-circle-fill text-success"></i> <b>Why are Professional Skills Crucial for Career Growth?</b></li>
          <li><i class="bi bi-check-circle-fill text-success"></i> <b>How to Develop and Master Professional Skills?</b></li>
        </ul>

        <div class="mt-5">
          <div class="bg-white p-4 rounded shadow-lg" data-aos="fade-up" data-aos-delay="500">
            <h3 class="fw-bold text-primary" style="font-size: 2.3rem;">Defining Professional Skills</h3>
            <p style="font-size: 1.3rem;">
              Professional skills, also known as soft skills or interpersonal skills, are crucial for success in any career. These skills go beyond technical expertise, focusing on communication, problem-solving, and teamwork. They are essential for building relationships, managing tasks effectively, and contributing to a positive workplace environment.
            </p>
            <h4 style="font-size: 1.6rem;">Examples of Professional Skills</h4>
            <p style="font-size: 1.3rem;"><b>Effective communication, collaboration, conflict resolution, adaptability, leadership, emotional intelligence.</b></p>
          </div><br>
          <div class="bg-white p-4 rounded shadow-lg" data-aos="fade-up" data-aos-delay="600">
            <h3 class="fw-bold text-primary mt-4" style="font-size: 2.3rem;">Key Skills for Career Advancement</h3>
            <p style="font-size: 1.3rem;">
              In the modern job market, a combination of technical and soft skills is necessary for career success. Skills like critical thinking, leadership, and communication are essential in almost any role, making it important to continuously develop them.
            </p>
            <h3 class="fw-bold text-primary mt-4" style="font-size: 2.3rem;">Activity: Group Discussion and Reflection</h3>
            <p style="font-size: 1.3rem;">
              In class, we participated in a group activity where we discussed and analyzed different real-life scenarios, highlighting the importance of key professional skills. Afterward, we shared our insights and received valuable feedback from our lecturer.
            </p><br>
            <div class="text-center">
              <img src=${first} class="img-fluid rounded shadow-lg" style="height: 500px" alt="Johari Window" data-aos="zoom-in" data-aos-delay="700">
            </div>
          </div><br>
          <div class="bg-white p-4 rounded shadow-lg" data-aos="fade-up" data-aos-delay="800">
            <h3 class="fw-bold text-primary mt-4" style="font-size: 2.3rem;">Johari Window: Enhancing Self-Awareness</h3>
            <div class="row align-items-center mt-4">
              <div class="col-lg-5">
                <img src=${second} class="img-fluid rounded shadow-lg" alt="Johari Window" data-aos="zoom-in" data-aos-delay="900">
              </div>
              <div class="col-lg-7">
                <p style="font-size: 1.3rem;">
                  The Johari Window model, created by Joseph Luft and Harrington Ingham, promotes self-awareness by helping individuals understand the differences between how they see themselves and how others perceive them. This concept is a valuable tool for personal and professional growth.
                </p>
              </div>
            </div>
            <div class="bg-light p-4 rounded mt-5" data-aos="fade-up" data-aos-delay="1000">
              <h3 class="fw-bold text-primary" style="font-size: 2.3rem;">Practical Tips for Improving Professional Skills</h3>
              <ul class="list-unstyled text-start d-inline-block fs-5">
                <li><i class="bi bi-check-circle-fill text-success"></i> Step outside your comfort zone to tackle new challenges.</li>
                <li><i class="bi bi-check-circle-fill text-success"></i> Actively seek feedback from peers and mentors to enhance your abilities.</li>
                <li><i class="bi bi-check-circle-fill text-success"></i> Commit to continuous learning and development, both inside and outside of work.</li>
                <li><i class="bi bi-check-circle-fill text-success"></i> Collaborate with others to improve teamwork and problem-solving skills.</li>
              </ul>
            </div>
            <p class="mt-3" style="font-size: 1.3rem;">
              This lecture has been an eye-opener, providing essential tools for improving both our personal and professional lives.
            </p>
          </div>
        </div>
      </section>
    `,
  },
  {
    id: 2,
    content: `
      <section class="container mt-5" data-aos="fade-up">
        <h1 class="fw-bold text-primary text-center" style="font-size: 2.5rem;" data-aos="fade-up" data-aos-delay="100">CV Writing and Writing Cover Letters</h1>
        <p class="text-center" data-aos="fade-up" data-aos-delay="200">By Miss Ishara Raviharee Weerasinghe</p>
        <div class="bg-white p-4 rounded shadow-lg" data-aos="fade-up" data-aos-delay="300">
          <p style="font-size: 1.4rem; color: darkslategrey;">
            In this lecture, we discussed how to create a professional curriculum vitae (CV). A CV is a very important document that gives someone an overall idea about the person. So basically, in this lecture, we discussed CV writing and cover letter writing. <br> So, what are the main points?
          </p>
          <div class="text-left">
            <ul class="list-unstyled text-start d-inline-block fs-5">
              <li><i class="bi bi-check-circle-fill"></i> <span><b>Identify the structure of a CV</b></span></li>
              <li><i class="bi bi-check-circle-fill"></i> <span><b>Recognize the registers used in cover letter writing</b></span></li>
              <li><i class="bi bi-check-circle-fill"></i> <span><b>Create a professional CV</b></span></li>
            </ul>
          </div>
        </div>

        <div class="mt-5">
          <div class="bg-white p-4 rounded shadow-lg" data-aos="fade-up" data-aos-delay="400">
            <h3 class="fw-bold text-primary" style="font-size: 2.3rem;">What is a CV?</h3>
            <p style="font-size: 1.3rem;">
              A Curriculum Vitae (CV) is an extensive document that provides a summary of your training, professional background, achievements, abilities, and more. Its goal is to highlight your skills and fit for a particular position.
            </p>
          </div><br>
          <div class="bg-white p-4 rounded shadow-lg" data-aos="fade-up" data-aos-delay="500">
            <h3 class="fw-bold text-primary mt-4" style="font-size: 2.3rem;">What Have I Learned?</h3>
            <p style="font-size: 1.3rem;">
              A well-crafted CV is very important, especially in today's job market. By tailoring my CV to the specific job I'm applying for, I can highlight the most relevant skills and experiences. For example, in a marketing role, I would focus on my creative skills and campaign successes. In a technical role, I would emphasize my programming skills and technical certifications.
              A tailored CV shows my genuine interest in the role and that I have researched the company. It also helps my CV pass through automated systems by using the right keywords from the job description. By directly addressing the job requirements, I can show why I am the ideal candidate for the position.
            </p>
            <p style="font-size: 1.3rem;">
              The first step in creating a strong CV is creating a header with name and contact details clearly displayed. A compelling aim or summary that simply summarizes job goals and essential skills must come next. Provide a thorough work experience section with a list of previous roles. Include a section on your education that lists your degrees and any relevant courses you've taken. Remember to include a section on skills related to the position. To present a complete picture of your background, lastly think about including areas for certificates, professional associations, and any service projects.
            </p>
          </div><br>
          <div class="bg-white p-4 rounded shadow-lg" data-aos="fade-up" data-aos-delay="600">
            <h3 class="fw-bold text-primary mt-4" style="font-size: 2.3rem;">Activity</h3>
            <p style="font-size: 1.3rem;">
              We were given a paper to fill in the empty spaces on a CV during the lesson. Then, we got a few advertisements asking us to create good cover letters.
            </p>
            <div class="row gy-4">
              <div class="col-lg-6" data-aos="zoom-in" data-aos-delay="700">
                <img src=${third} class="img-fluid" alt="CV Image 1">
              </div>
              <div class="col-lg-6" data-aos="zoom-in" data-aos-delay="800">
                <img src=${fourth} class="img-fluid" alt="CV Image 2">
              </div>
            </div>
          </div><br>
          <div class="bg-white p-4 rounded shadow-lg" data-aos="fade-up" data-aos-delay="900">
            <h3 class="fw-bold text-primary mt-4" style="font-size: 2.3rem;">How to Write My Cover Letter?</h3>
            <p style="font-size: 1.3rem;">
              Begin the cover paragraph by stating the job for which you have applied and the source of the job posting. Next, provide an introduction of your most pertinent experience and abilities, explaining how they meet the job requirements with specific examples. Finally, express how excited you are about the position and the firm, and that you would like to discuss more about how you can contribute to the team.
            </p>
          </div><br>
          <div class="bg-white p-4 rounded shadow-lg" data-aos="fade-up" data-aos-delay="1000">
            <h3 class="fw-bold text-primary mt-4" style="font-size: 2.3rem;">What Have I Learned from This Lecture?</h3>
            <ul style="font-size: 1.3rem;">
              <li>Identify the structure of a CV and cover letter.</li>
              <li>Recognize the registers used in cover letter writing.</li>
              <li>Write a cover letter with reference to a job advertisement.</li>
              <li>How to create a professional CV.</li>
            </ul>
          </div>
        </div>
      </section>
    `,
  },
  {
    id: 3,
    content: `
      <section class="container mt-5" data-aos="fade-up">
        <h1 class="fw-bold text-primary text-center" data-aos="fade-up" data-aos-delay="100">Portfolio Management</h1>
        <p class="text-muted text-center" data-aos="fade-up" data-aos-delay="200">By Miss Ishara Raviharee Weerasinghe</p><br>
        <p class="fs-5 text-dark" data-aos="fade-up" data-aos-delay="300">
          In this lecture, we explored how to create and manage a well-structured portfolio. The discussion covered key areas such as:
        </p>
        <ul class="list-unstyled text-start d-inline-block fs-5" data-aos="fade-up" data-aos-delay="400">
          <li><i class="bi bi-check-circle-fill text-success"></i> <b>What are the uses of a portfolio?</b></li>
          <li><i class="bi bi-check-circle-fill text-success"></i> <b>Types of portfolios</b></li>
          <li><i class="bi bi-check-circle-fill text-success"></i> <b>How to create portfolios using online sources</b></li>
        </ul>

        <div class="mt-5">
          <div class="bg-white p-4 rounded shadow-lg" data-aos="fade-up" data-aos-delay="500">
            <h3 class="fw-bold text-primary">What Are the Uses of a Portfolio?</h3>
            <p class="fs-5">
              We began by discussing the significance of portfolios and how they contribute to professional and academic growth. Portfolios serve various purposes, including:
            </p>
            <ul class="list-unstyled text-start d-inline-block fs-5">
              <li><i class="bi bi-check-circle-fill text-success"></i> <b>Job Applications</b></li>
              <li><i class="bi bi-check-circle-fill text-success"></i> <b>Career Advancement</b></li>
              <li><i class="bi bi-check-circle-fill text-success"></i> <b>Creative Industries</b></li>
              <li><i class="bi bi-check-circle-fill text-success"></i> <b>Educational Assessments & Admissions</b></li>
              <li><i class="bi bi-check-circle-fill text-success"></i> <b>Freelancing & Consulting</b></li>
              <li><i class="bi bi-check-circle-fill text-success"></i> <b>Professional Development</b></li>
              <li><i class="bi bi-check-circle-fill text-success"></i> <b>Skill Demonstrations</b></li>
              <li><i class="bi bi-check-circle-fill text-success"></i> <b>Entrepreneurship & Networking</b></li>
              <li><i class="bi bi-check-circle-fill text-success"></i> <b>Personal Branding</b></li>
            </ul>
          </div><br>
          <div class="bg-white p-4 rounded shadow-lg" data-aos="fade-up" data-aos-delay="600">
            <h3 class="fw-bold text-primary mt-4">Types of Portfolios</h3>
            <p class="fs-5">We then explored different types of portfolios, each serving a unique purpose:</p>
            <p class="fs-5"><b>1. Personal Portfolio</b><br> A collection of creative works, projects, and achievements that highlight skills, talents, and interests.</p>
            <p class="fs-5"><b>2. Career/Dossier Portfolio</b><br> A professional portfolio including resumes, cover letters, references, and documented work experience.</p>
            <p class="fs-5"><b>3. Employment Portfolio</b><br> A detailed collection of work-related accomplishments and skill evidence.</p>
            <p class="fs-5"><b>4. Assessment Portfolio</b><br> Used to track learning progress, showcasing growth and achievements over time.</p>
          </div><br>
          <div class="bg-white p-4 rounded shadow-lg" data-aos="fade-up" data-aos-delay="700">
            <div class="row align-items-center mt-4">
              <div class="col-lg-5">
                <img src=${six} class="img-fluid rounded shadow-lg" alt="Portfolio Image" data-aos="zoom-in" data-aos-delay="800">
              </div>
              <div class="col-lg-7">
                <h3 class="fw-bold text-primary">Portfolio Management</h3>
                <p class="fs-5">
                  In portfolio management, we covered three essential areas.
                </p>
              </div>
            </div>
            <div class="bg-light p-4 rounded mt-5" data-aos="fade-up" data-aos-delay="900">
              <h3 class="fw-bold text-primary">Creating Portfolios Using Online Platforms</h3>
              <p class="fs-5">
                Finally, we discussed various online platforms that assist in portfolio creation, including:
              </p>
              <ul class="list-unstyled text-start d-inline-block fs-5">
                <li><i class="bi bi-check-circle-fill text-success"></i> <b>LinkedIn</b> – Professional networking and portfolio showcase</li>
                <li><i class="bi bi-check-circle-fill text-success"></i> <b>Behance</b> – Ideal for creative professionals and designers</li>
                <li><i class="bi bi-check-circle-fill text-success"></i> <b>Google Sites</b> – Simple and free portfolio website creation</li>
                <li><i class="bi bi-check-circle-fill text-success"></i> <b>WordPress & Wix</b> – Advanced portfolio websites with customization</li>
                <li><i class="bi bi-check-circle-fill text-success"></i> <b>GitHub</b> – Perfect for developers to showcase code projects</li>
                <li><i class="bi bi-check-circle-fill text-success"></i> <b>Cargo</b> – Aesthetic portfolios for artists and designers</li>
              </ul>
            </div>
            <p class="fs-5 mt-3">
              These platforms provide structured, professional portfolio creation, helping individuals highlight their skills effectively.
            </p>
          </div>
        </div>
      </section>
    `,
  },
  {
    id: 4,
    content: `
      <section class="container mt-4" data-aos="fade-up">
        <h1 class="fw-bold text-primary text-center" data-aos="fade-up" data-aos-delay="100">Email Etiquette</h1>
        <p class="text-muted text-center" data-aos="fade-up" data-aos-delay="200">By Miss Ishara Raviharee Weerasinghe</p><br>
        <p class="fs-4 text-dark" data-aos="fade-up" data-aos-delay="300">
          Today’s professional skills lecture focused on email etiquette. Below are some key takeaways:
        </p>
        <ul class="list-unstyled text-start d-inline-block fs-5" data-aos="fade-up" data-aos-delay="400">
          <li><i class="bi bi-check-circle-fill text-success"></i> <b>What is etiquette?</b></li>
          <li><i class="bi bi-check-circle-fill text-success"></i> <b>What are the Email Etiquettes?</b></li>
          <li><i class="bi bi-check-circle-fill text-success"></i> <b>Advantages and disadvantages of Emails</b></li>
        </ul>

        <div class="mt-4">
          <div class="bg-white p-4 rounded shadow-lg" data-aos="fade-up" data-aos-delay="500">
            <h4 class="fw-bold text-primary">What is Etiquette?</h4>
            <p class="fs-5">
              Etiquette refers to the set of rules and norms that define appropriate behavior in different situations.
            </p>
            <h4 class="fw-bold text-primary mt-4">Key Email Etiquette Rules</h4>
            <p class="fs-5">Essential guidelines when writing professional emails:</p>
            <ul class="list-unstyled text-start d-inline-block fs-5">
              <li><i class="bi bi-check-circle-fill text-success"></i> Always include a subject line</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> Use the recipient’s name in the greeting</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> Avoid writing in all capitals</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> Do not discuss confidential information via email</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> Use proper grammar and spelling</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> Be mindful of abbreviations and emoticons</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> Think before you send – review your message carefully</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> Do not forward unnecessary emails</li>
            </ul>
          </div><br>
          <div class="bg-white p-4 rounded shadow-lg" data-aos="fade-up" data-aos-delay="600">
            <h4 class="fw-bold text-primary mt-4">Advantages & Disadvantages of Emails</h4>
            <p class="fs-5">Emails provide both benefits and challenges.</p>
            <div class="row align-items-center mt-3">
              <div class="col-lg-5">
                <img src=${seven} class="img-fluid rounded shadow-lg" alt="Email Image" data-aos="zoom-in" data-aos-delay="700">
              </div>
              <div class="col-lg-7">
                <h5 class="fw-bold text-primary">Advantages</h5>
                <ul class="list-unstyled text-start d-inline-block fs-5">
                  <li><i class="bi bi-check-circle-fill text-success"></i> Fast & efficient communication</li>
                  <li><i class="bi bi-check-circle-fill text-success"></i> Written record for future reference</li>
                  <li><i class="bi bi-check-circle-fill text-success"></i> Supports attachments (documents, images, links)</li>
                  <li><i class="bi bi-check-circle-fill text-success"></i> Cost-effective & convenient</li>
                </ul>
              </div>
            </div>
            <div class="row align-items-center mt-4">
              <div class="col-lg-7">
                <h5 class="fw-bold text-danger">Disadvantages</h5>
                <ul class="list-unstyled text-start d-inline-block fs-5">
                  <li><i class="bi bi-x-circle-fill text-danger"></i> Miscommunication due to lack of tone/body language</li>
                  <li><i class="bi bi-x-circle-fill text-danger"></i> Information overload – managing too many emails</li>
                  <li><i class="bi bi-x-circle-fill text-danger"></i> Security risks (phishing, spam, hacking threats)</li>
                  <li><i class="bi bi-x-circle-fill text-danger"></i> Can be time-consuming</li>
                </ul>
              </div>
              <div class="col-lg-5">
                <img src=${eight} class="img-fluid rounded shadow-lg" alt="Email Risks" data-aos="zoom-in" data-aos-delay="800">
              </div>
            </div>
            <div class="bg-light p-4 rounded mt-4" data-aos="fade-up" data-aos-delay="900">
              <h4 class="fw-bold text-primary">Professional Email Etiquette</h4>
              <p class="fs-5">Follow these best practices for effective emails:</p>
              <ul class="list-unstyled text-start d-inline-block fs-5">
                <li><i class="bi bi-check-circle-fill text-success"></i> Use a clear subject line</li>
                <li><i class="bi bi-check-circle-fill text-success"></i> Start with a proper greeting</li>
                <li><i class="bi bi-check-circle-fill text-success"></i> Be concise and to the point</li>
                <li><i class="bi bi-check-circle-fill text-success"></i> Maintain a professional tone</li>
                <li><i class="bi bi-check-circle-fill text-success"></i> End with a proper sign-off</li>
              </ul><br>
              <img src=${nine} style="width:75%" data-aos="zoom-in" data-aos-delay="1000">
            </div>
            <p class="fs-5 mt-3">
              Following these email etiquette guidelines ensures clear and professional communication in both academic and business settings.
            </p>
          </div><br>
          <div class="bg-white p-4 rounded shadow-lg" data-aos="fade-up" data-aos-delay="1100">
            <h4 class="fw-bold text-primary">Meetings</h4>
            <p class="fs-5 mt-3">
              In there we discuss about several meetings and we done class activity.
            </p>
            <iframe src=${ten} width="75%" height="600px" style="border: none" data-aos="fade-up" data-aos-delay="1200"></iframe>
          </div>
        </div>
      </section>
    `,
  },
  {
    id: 5,
    content: `
      <section class="container mt-4" data-aos="fade-up">
        <h1 class="fw-bold text-primary text-center" data-aos="fade-up" data-aos-delay="100">Telephone Etiquette</h1>
        <p class="text-muted text-center" data-aos="fade-up" data-aos-delay="200">By Miss Ishara Raviharee Weerasinghe</p><br>
        <p class="fs-4 text-dark" data-aos="fade-up" data-aos-delay="300">
          Today’s professional skills lecture focused on telephone etiquette. Below are some key takeaways:
        </p>
        <ul class="list-unstyled text-start d-inline-block fs-5" data-aos="fade-up" data-aos-delay="400">
          <li><i class="bi bi-check-circle-fill text-success"></i> <b>General Rules for Telephone Use</b></li>
          <li><i class="bi bi-check-circle-fill text-success"></i> <b>Greeting Callers</b></li>
          <li><i class="bi bi-check-circle-fill text-success"></i> <b>Proper Telephone Language</b></li>
        </ul>

        <div class="mt-4">
          <div class="bg-white p-4 rounded shadow-lg" data-aos="fade-up" data-aos-delay="500">
            <h4 class="fw-bold text-primary">General Rules for Telephone Use</h4>
            <p class="fs-5">
              - Speak directly into the mouthpiece or headset.<br>
              - Avoid eating, chewing gum, or covering the phone while speaking.<br>
              - Use the hold button properly; never leave a caller unattended.<br>
              - Answer within 2-3 rings whenever possible.
            </p>
          </div><br>
          <div class="bg-white p-4 rounded shadow-lg" data-aos="fade-up" data-aos-delay="600">
            <h4 class="fw-bold text-primary mt-4">Greeting Callers</h4>
            <p class="fs-5">Proper ways to greet callers based on organization size:</p>
            <ul class="list-unstyled text-start d-inline-block fs-5">
              <li><i class="bi bi-check-circle-fill text-success"></i> Large organizations: "Thank you for calling [Department Name]. How may I assist you?"</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> Small organizations: "Thank you for calling [Company Name]. How can I help you?"</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> Departments: "[Department Name], [Your Name], how may I assist you?"</li>
            </ul>
          </div><br>
          <div class="bg-white p-4 rounded shadow-lg" data-aos="fade-up" data-aos-delay="700">
            <h4 class="fw-bold text-primary mt-4">Placing Callers on Hold & Transferring Calls</h4>
            <ul class="list-unstyled text-start d-inline-block fs-5">
              <li><i class="bi bi-check-circle-fill text-success"></i> Always ask for permission before placing a caller on hold.</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> Check back periodically if the hold time is extended.</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> Explain the reason for a call transfer and get consent.</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> Ensure the receiving party is available before transferring.</li>
            </ul>
          </div><br>
          <div class="bg-white p-4 rounded shadow-lg" data-aos="fade-up" data-aos-delay="800">
            <h4 class="fw-bold text-primary mt-4">Proper Telephone Language</h4>
            <p class="fs-5">Maintain professionalism in phone conversations:</p>
            <ul class="list-unstyled text-start d-inline-block fs-5">
              <li><i class="bi bi-check-circle-fill text-success"></i> Use polite and positive language.</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> Avoid abrupt or unprofessional phrases.</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> Replace negative words with constructive responses.</li>
            </ul>
          </div><br>
          <div class="bg-white p-4 rounded shadow-lg" data-aos="fade-up" data-aos-delay="900">
            <h4 class="fw-bold text-primary mt-4">Ending Conversations</h4>
            <ul class="list-unstyled text-start d-inline-block fs-5">
              <li><i class="bi bi-check-circle-fill text-success"></i> Summarize the conversation before ending the call.</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> Use closing phrases such as "Is there anything else I can help you with today?"</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> Thank the caller for their time.</li>
            </ul>
          </div><br>
          <div class="bg-white p-4 rounded shadow-lg" data-aos="fade-up" data-aos-delay="1000">
            <h4 class="fw-bold text-primary mt-4">Professionalism in Business Calls</h4>
            <ul class="list-unstyled text-start d-inline-block fs-5">
              <li><i class="bi bi-check-circle-fill text-success"></i> Always answer calls professionally and promptly.</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> Use voicemail effectively with clear and concise messages.</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> Ensure customer satisfaction by providing accurate information.</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> Maintain a professional tone and avoid slang.</li>
            </ul>
          </div><br>
        </div>
        <p class="fs-5 mt-3" data-aos="fade-up" data-aos-delay="1100">
          Adhering to proper telephone etiquette ensures effective and professional communication, making interactions smoother and more productive.
        </p>
      </section>
    `,
  },
  {
    id: 6,
    content: `
      <section class="container mt-4" data-aos="fade-up">
        <h1 class="fw-bold text-primary text-center" data-aos="fade-up" data-aos-delay="100">Food Festival</h1>
        <p class="text-muted text-center" data-aos="fade-up" data-aos-delay="200">Group Activity of the Module</p><br>
        <p class="fs-4 text-dark" data-aos="fade-up" data-aos-delay="300">
          This was our Group activity for this module, where we had to organize a food festival, open a shop, and sell food items. Below are the key details:
        </p>
        <ul class="list-unstyled text-start d-inline-block fs-5" data-aos="fade-up" data-aos-delay="400">
          <li><i class="bi bi-check-circle-fill text-success"></i> <b>Overview of the Food Festival</b></li>
          <li><i class="bi bi-check-circle-fill text-success"></i> <b>Items Sold at Our Shop</b></li>
          <li><i class="bi bi-check-circle-fill text-success"></i> <b>Skills Applied During the Activity</b></li>
        </ul>

        <div class="mt-4">
          <div class="bg-white p-4 rounded shadow-lg" data-aos="fade-up" data-aos-delay="500">
            <h4 class="fw-bold text-primary">Overview of the Food Festival</h4>
            <p class="fs-5">
              The event required us to set up and manage a food stall, applying skills learned throughout the module. We sold various food items and gained hands-on experience in business operations.
            </p>
            <h4 class="fw-bold text-primary mt-4">Items Sold at Our Shop</h4>
            <p class="fs-5">We offered four main items at our stall:</p>
            <ul class="list-unstyled text-start d-inline-block fs-5">
              <li><i class="bi bi-check-circle-fill text-success"></i> Kottu</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> Parata</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> Pickles (Mango, Abarella, Jambu, Lovi)</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> Faluda</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> Milk Toffee</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> Chicken Bun</li>
            </ul>
          </div><br>
          <div class="bg-white p-4 rounded shadow-lg" data-aos="fade-up" data-aos-delay="600">
            <h4 class="fw-bold text-primary mt-4">Skills Applied During the Activity</h4>
            <p class="fs-5">
              Throughout the event, we implemented various skills learned in our lectures, such as:
            </p>
            <ul class="list-unstyled text-start d-inline-block fs-5">
              <li><i class="bi bi-check-circle-fill text-success"></i> Negotiation skills while selling food</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> Effective communication with customers</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> Teamwork and coordination</li>
            </ul>
          </div><br>
          <div class="bg-white p-4 rounded shadow-lg" data-aos="fade-up" data-aos-delay="700">
            <h4 class="fw-bold text-primary">Gallery</h4>
            <p class="fs-5">Here are some moments captured from the event:</p>
            <div class="row align-items-center mt-3">
              <div class="col-lg-6" data-aos="zoom-in" data-aos-delay="800">
                <img src=${image5} class="img-fluid rounded shadow-lg" alt="Food Festival Image 1">
              </div>
              <div class="col-lg-6" data-aos="zoom-in" data-aos-delay="900">
                <img src=${image7} class="img-fluid rounded shadow-lg" alt="Food Festival Image 2">
              </div>
            </div>
            <p class="fs-5 mt-3">
              This activity was not only enjoyable but also a valuable learning experience that enhanced our practical skills.
            </p>
          </div>
        </div>
      </section>
    `,
  },
  {
    id: 7,
    content: `
      <section class="container mt-4" data-aos="fade-up">
        <h1 class="fw-bold text-primary text-center" data-aos="fade-up" data-aos-delay="100">Job Interview Guide</h1>
        <p class="text-muted text-center" data-aos="fade-up" data-aos-delay="200">Essential Tips for Successful Interviews</p><br>
        <p class="fs-4 text-dark" data-aos="fade-up" data-aos-delay="300">
          Mastering interviews requires strong communication, preparation, and confidence. Here are key strategies:
        </p>
        <ul class="list-unstyled text-start d-inline-block fs-5" data-aos="fade-up" data-aos-delay="400">
          <li><i class="bi bi-check-circle-fill text-success"></i> <b>Effective Communication in Interviews</b></li>
          <li><i class="bi bi-check-circle-fill text-success"></i> <b>Best Interview Strategies</b></li>
          <li><i class="bi bi-check-circle-fill text-success"></i> <b>Key Communication Techniques</b></li>
        </ul>

        <div class="mt-4">
          <div class="bg-white p-4 rounded shadow-lg" data-aos="fade-up" data-aos-delay="500">
            <h4 class="fw-bold text-primary">Effective Communication in Interviews</h4>
            <p class="fs-5">Verbal and non-verbal skills play a crucial role in making a strong impression.</p>
            <ul class="list-unstyled text-start d-inline-block fs-5">
              <li><i class="bi bi-check-circle-fill text-success"></i> Maintain eye contact and smile.</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> Use confident body language.</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> Be clear, concise, and professional.</li>
            </ul>
          </div><br>
          <div class="bg-white p-4 rounded shadow-lg" data-aos="fade-up" data-aos-delay="600">
            <h4 class="fw-bold text-primary mt-4">Best Interview Strategies</h4>
            <p class="fs-5">Develop a personalized strategy by addressing these key questions:</p>
            <ul class="list-unstyled text-start d-inline-block fs-5">
              <li><i class="bi bi-check-circle-fill text-success"></i> What do I want the interviewer to know about me?</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> What weaknesses should I minimize?</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> What information do I need about the company?</li>
            </ul>
          </div><br>
          <div class="bg-white p-4 rounded shadow-lg" data-aos="fade-up" data-aos-delay="700">
            <h4 class="fw-bold text-primary mt-4">Key Communication Techniques</h4>
            <ul class="list-unstyled text-start d-inline-block fs-5">
              <li><i class="bi bi-check-circle-fill text-success"></i> <b>Active Listening:</b> Pay attention, seek clarification, and respond appropriately.</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> <b>Non-Verbal Cues:</b> 93% of communication is through tone and body language.</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> <b>6 C’s of Effective Communication:</b> Clear, Concise, Correct, Complete, Concrete, Courteous, and Confident.</li>
            </ul>
          </div><br>
          <div class="bg-white p-4 rounded shadow-lg" data-aos="fade-up" data-aos-delay="800">
            <h4 class="fw-bold text-primary mt-4">Successful vs. Unsuccessful Candidates</h4>
            <p class="fs-5 text-success fw-bold">Successful candidates:</p>
            <ul class="list-unstyled text-start d-inline-block fs-5">
              <li><i class="bi bi-check-circle-fill text-success"></i> Are well-prepared and confident.</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> Use industry terminology and provide specific examples.</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> Engage actively and ask insightful questions.</li>
            </ul>
            <p class="fs-5 text-danger fw-bold">Unsuccessful candidates:</p>
            <ul class="list-unstyled text-start d-inline-block fs-5">
              <li><i class="bi bi-x-circle-fill text-danger"></i> Have vague responses and lack company knowledge.</li>
              <li><i class="bi bi-x-circle-fill text-danger"></i> Show little enthusiasm and poor body language.</li>
              <li><i class="bi bi-x-circle-fill text-danger"></i> Avoid asking questions.</li>
            </ul>
          </div><br>
          <div class="bg-white p-4 rounded shadow-lg" data-aos="fade-up" data-aos-delay="900">
            <h4 class="fw-bold text-primary mt-4">Common Interview Questions</h4>
            <p class="fs-5">Example Question: <b>Tell us about a challenge you’ve faced and how you handled it.</b></p>
            <p class="fs-5">Sample Answer: "In my last job, we had a tight deadline. I took the lead, delegated tasks, and successfully delivered the project on time."</p>
          </div><br>
          <div class="bg-white p-4 rounded shadow-lg" data-aos="fade-up" data-aos-delay="1000">
            <h4 class="fw-bold text-primary mt-4">Final Tips</h4>
            <ul class="list-unstyled text-start d-inline-block fs-5">
              <li><i class="bi bi-check-circle-fill text-success"></i> Research the company beforehand.</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> Dress appropriately for the interview.</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> Practice with mock interviews.</li>
            </ul>
          </div>
        </div>
      </section>
    `,
  },
  {
    id: 8,
    content: `
      <section class="container mt-4" data-aos="fade-up">
        <h1 class="fw-bold text-primary text-center" data-aos="fade-up" data-aos-delay="100">Emotional Intelligence</h1>
        <p class="text-muted text-center" data-aos="fade-up" data-aos-delay="200">Understanding and Applying Emotional Intelligence in Professional and Personal Growth</p><br>
        <p class="fs-4 text-dark" data-aos="fade-up" data-aos-delay="300">
          Today’s professional skills lecture focused on Emotional Intelligence (EI). The session covered the definition, importance, and application of EI in various aspects of life.
        </p>
        <ul class="list-unstyled text-start d-inline-block fs-5" data-aos="fade-up" data-aos-delay="400">
          <li><i class="bi bi-check-circle-fill text-success"></i> <b>What is Emotional Intelligence (EI)?</b></li>
          <li><i class="bi bi-check-circle-fill text-success"></i> <b>IQ vs. EQ</b></li>
          <li><i class="bi bi-check-circle-fill text-success"></i> <b>EI Domains and Their Importance</b></li>
          <li><i class="bi bi-check-circle-fill text-success"></i> <b>Emotional Intelligence and Leadership</b></li>
        </ul>

        <div class="mt-4">
          <div class="bg-white p-4 rounded shadow-lg" data-aos="fade-up" data-aos-delay="500">
            <h4 class="fw-bold text-primary">What is Emotional Intelligence (EI)?</h4>
            <p class="fs-5">
              Defined by Salovey and Mayer (1990) as the ability to monitor and manage one's own and others' emotions. Key skills include perceiving emotions, understanding emotional meanings, using emotions in thinking, and managing emotions effectively.
            </p>
            <h4 class="fw-bold text-primary mt-4">IQ vs. EQ</h4>
            <p class="fs-5">
              IQ measures cognitive abilities, whereas EQ focuses on emotional awareness and management. While IQ plays a role in academic and technical skills, EQ is essential for stress management, relationship-building, and effective leadership.
            </p>
          </div><br>
          <div class="bg-white p-4 rounded shadow-lg" data-aos="fade-up" data-aos-delay="600">
            <h4 class="fw-bold text-primary">The Five Domains of Emotional Intelligence</h4>
            <p class="fs-5">Daniel Goleman’s EI framework consists of five core domains that contribute to emotional and social effectiveness:</p>
            <h5 class="fw-bold text-primary">1. Self-Awareness</h5>
            <p class="fs-5">Understanding one's emotions and their impact on thoughts and behaviors. Self-aware individuals recognize their emotional strengths and weaknesses and maintain confidence in their abilities.</p>
            <h5 class="fw-bold text-primary">2. Self-Regulation</h5>
            <p class="fs-5">Managing emotions in a constructive way to adapt to different situations. Strategies include practicing mindfulness, reframing negative thoughts, and maintaining control in stressful scenarios.</p>
            <h5 class="fw-bold text-primary">3. Motivation</h5>
            <p class="fs-5">Pursuing goals with passion and resilience. Emotionally intelligent individuals are intrinsically motivated, optimistic, and able to overcome setbacks without losing focus.</p>
            <h5 class="fw-bold text-primary">4. Empathy</h5>
            <p class="fs-5">Recognizing and understanding the emotions of others. This skill helps build strong relationships, improve communication, and foster a supportive environment.</p>
            <h5 class="fw-bold text-primary">5. Social Skills</h5>
            <p class="fs-5">Building strong relationships and navigating social complexities effectively. Key skills include communication, influence, conflict resolution, and teamwork.</p>
          </div><br>
          <div class="bg-white p-4 rounded shadow-lg" data-aos="fade-up" data-aos-delay="700">
            <h4 class="fw-bold text-primary">Emotional Intelligence and Leadership</h4>
            <p class="fs-5">Effective leaders leverage EI to inspire and manage teams. Goleman’s leadership competencies emphasize self-awareness, self-regulation, motivation, empathy, and social skills as essential traits for successful leadership.</p>
          </div><br>
          <div class="bg-white p-4 rounded shadow-lg" data-aos="fade-up" data-aos-delay="800">
            <h4 class="fw-bold text-primary">Practical Applications</h4>
            <p class="fs-5">Emotional Intelligence plays a critical role in reducing stress, resolving conflicts, enhancing job satisfaction, and improving decision-making. Mastering EI contributes to stronger relationships, career success, and personal fulfillment.</p>
          </div><br>
          <div class="bg-white p-4 rounded shadow-lg" data-aos="fade-up" data-aos-delay="900">
            <h4 class="fw-bold text-primary">EI Activity</h4>
            <p class="fs-5">We have done some class activities in the lecture time</p>
            <div class="row">
              <div class="col-lg-5" data-aos="zoom-in" data-aos-delay="1000">
                <img src=${image8} class="img-fluid rounded shadow" alt="Self-awareness exercise">
              </div>
              <div class="col-lg-5" data-aos="zoom-in" data-aos-delay="1100">
                <img src=${image9} class="img-fluid rounded shadow" alt="Empathy mapping exercise">
              </div>
            </div>
          </div>
        </div>
      </section>
    `,
  },
  {
    id: 9,
    content: `
      <section class="container mt-4" data-aos="fade-up">
        <h1 class="fw-bold text-primary text-center" data-aos="fade-up" data-aos-delay="100">Dining Etiquettes</h1>
        <p class="text-muted text-center" data-aos="fade-up" data-aos-delay="200">By Miss Ishara Raviharee Weerasinghe</p><br>
        <p class="fs-4 text-dark" data-aos="fade-up" data-aos-delay="300">
          Today’s professional skills lecture focused on Dining Etiquettes, covering the formal allocation of dining table settings and proper dining behavior.
        </p>
        <ul class="list-unstyled text-start d-inline-block fs-5" data-aos="fade-up" data-aos-delay="400">
          <li><i class="bi bi-check-circle-fill text-success"></i> <b>Dining Rules</b></li>
          <li><i class="bi bi-check-circle-fill text-success"></i> <b>Dining Positions</b></li>
          <li><i class="bi bi-check-circle-fill text-success"></i> <b>Types of Business Etiquettes</b></li>
        </ul>

        <div class="mt-4">
          <div class="bg-white p-4 rounded shadow-lg" data-aos="fade-up" data-aos-delay="500">
            <h4 class="fw-bold text-primary">Formal Dining Table Allocation</h4>
            <p class="fs-5">
              The lecturer explained the formal allocation of dining table settings, emphasizing starting with utensils on the outside and working inward. This includes using forks, knives, and spoons before moving to chargers, bowls, and other items.
            </p>
            <p class="fs-5">
              <b>Napkin Etiquette:</b> Place the napkin on your lap, folded into a large triangle or rectangle. Avoid crumpling it into a ball or using it as a bib.
            </p>
            <p class="fs-5">
              <b>Bread and Butter:</b> Break off and eat small pieces of bread, muffins, or rolls one at a time. When using a community butter dish, take only what you need and place it on your bread plate to avoid repeated dipping.
            </p>
            <p class="fs-5">
              <b>Salt and Pepper:</b> Always pass salt and pepper together, even if only one is requested, as they are considered inseparable, like "penguins—black and white and together for life."
            </p>
          </div><br>
          <div class="bg-white p-4 rounded shadow-lg" data-aos="fade-up" data-aos-delay="600">
            <h4 class="fw-bold text-primary">Basic Dining Manners</h4>
            <ul class="list-unstyled text-start d-inline-block fs-5">
              <li><i class="bi bi-check-circle-fill text-success"></i> Take small bites, keep your mouth closed, and finish chewing before speaking.</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> Avoid gulping food, as it is unattractive.</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> Do not blow on hot food; wait for it to cool or eat from the side of the bowl for soup.</li>
            </ul>
          </div><br>
          <div class="bg-white p-4 rounded shadow-lg" data-aos="fade-up" data-aos-delay="700">
            <h4 class="fw-bold text-primary">Holding Silverware</h4>
            <p class="fs-5">There are two correct methods to hold and use silverware, suitable for different eating paces:</p>
            <ul class="list-unstyled text-start d-inline-block fs-5">
              <li><i class="bi bi-check-circle-fill text-success"></i> <b>Pencil Method:</b> Hold the utensil like a pencil, resting between the tips of your pointer and middle fingers with your thumb on top. The end rests on the webbing of your hand.</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> <b>Scalpel Method:</b> Hold the utensil like a surgeon’s scalpel, with tines facing downward. The pointer finger presses on the back of the neck, and the handle touches the center of your palm.</li>
            </ul>
            <p class="fs-5">The European method is recommended for slow eaters to speed up, while the American method suits fast eaters to slow down.</p>
          </div><br>
          <div class="bg-white p-4 rounded shadow-lg" data-aos="fade-up" data-aos-delay="800">
            <h4 class="fw-bold text-primary">Dining Positions</h4>
            <ul class="list-unstyled text-start d-inline-block fs-5">
              <li><i class="bi bi-check-circle-fill text-success"></i> Continental/European Style</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> American Style</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> Finished Eating</li>
            </ul>
          </div><br>
          <div class="bg-white p-4 rounded shadow-lg" data-aos="fade-up" data-aos-delay="900">
            <h4 class="fw-bold text-primary">Gallery</h4>
            <p class="fs-5">Visual examples of dining etiquette setups:</p>
            <div class="row gy-4">
              <div class="col-lg-6" data-aos="zoom-in" data-aos-delay="1000">
                <img src=${din2} class="img-fluid rounded shadow-lg" alt="Dining Setup 1">
              </div>
              <div class="col-lg-6" data-aos="zoom-in" data-aos-delay="1100">
                <img src=${din3} class="img-fluid rounded shadow-lg" alt="Dining Setup 2">
              </div>
            </div>
          </div><br>
          <div class="bg-white p-4 rounded shadow-lg" data-aos="fade-up" data-aos-delay="1200">
            <h4 class="fw-bold text-primary">Business Etiquettes</h4>
            <p class="fs-5">The lecture covered five types of business etiquettes:</p>
            <ul class="list-unstyled text-start d-inline-block fs-5">
              <li><i class="bi bi-check-circle-fill text-success"></i> Workplace Etiquette</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> Meal Etiquette</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> Communication Etiquette</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> Professionalism Etiquette</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> Meeting Etiquette</li>
            </ul>
          </div><br>
          <div class="bg-white p-4 rounded shadow-lg" data-aos="fade-up" data-aos-delay="1300">
            <h4 class="fw-bold text-primary">Role of First Impressions</h4>
            <p class="fs-5">Key points for making a positive first impression during dining:</p>
            <ul class="list-unstyled text-start d-inline-block fs-5">
              <li><i class="bi bi-check-circle-fill text-success"></i> Genuine smile, not a fake one</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> Nice warm greeting</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> Exude positivity and energy</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> Appropriate eye contact</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> Active listening</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> Dress code</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> Grooming</li>
            </ul>
          </div><br>
          <div class="bg-white p-4 rounded shadow-lg" data-aos="fade-up" data-aos-delay="1400">
            <h4 class="fw-bold text-primary">Wine Glass Etiquette</h4>
            <p class="fs-5">
              For red wine glasses, hold at the bowl to warm the wine slightly. For white wine glasses, hold at the stem to keep the wine chilled.
            </p>
          </div>
        </div>
      </section>
    `,
  },{
    id: 10,
    content: `<section class="container mt-4" data-aos="fade-up">
        <h1 class="fw-bold text-primary text-center" data-aos="fade-up" data-aos-delay="100">Cultivating Effective Research Skills</h1>
        <p class="text-muted text-center" data-aos="fade-up" data-aos-delay="200">By Miss Ishadi  </p><br>
        <p class="fs-4 text-dark" data-aos="fade-up" data-aos-delay="300">
          Research is like a treasure hunt to find new information or solve problems. This chapter will guide you through the steps to become a great researcher!
        </p>
        <ul class="list-unstyled text-start d-inline-block fs-5" data-aos="fade-up" data-aos-delay="400">
          <li><i class="bi bi-check-circle-fill text-success"></i> <b>What is research?</b></li>
          <li><i class="bi bi-check-circle-fill text-success"></i> <b>Parts of a research paper</b></li>
          <li><i class="bi bi-check-circle-fill text-success"></i> <b>How to write a literature review, methodology, and more</b></li>
        </ul>

        <div class="mt-4">
          <div class="bg-white p-4 rounded shadow-lg" data-aos="fade-up" data-aos-delay="500">
            <h4 class="fw-bold text-primary">What is Research?</h4>
            <p class="fs-5">
              Research is a careful process of exploring a question or problem to find answers. It’s like solving a puzzle to learn something new or confirm what we know.
            </p>
            <h4 class="fw-bold text-primary mt-4">Parts of a Research Paper</h4>
            <p class="fs-5">A research paper has these key parts:</p>
            <ul class="list-unstyled text-start d-inline-block fs-5">
              <li><i class="bi bi-check-circle-fill text-success"></i> <b>Title:</b> A short, clear name for your research.</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> <b>Author Info:</b> Your name and school or contact details.</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> <b>Abstract:</b> A quick summary (150–250 words) of your research question, methods, results, and conclusions.</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> <b>Introduction:</b> Explains the background, the problem you’re studying, why it matters, and your goals.</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> <b>Literature Review:</b> Summarizes what others have already studied about your topic.</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> <b>Methodology:</b> Describes how you did your research.</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> <b>Results:</b> Shows what you found, often with charts or tables.</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> <b>Conclusion:</b> Wraps up your findings and suggests what to study next.</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> <b>Keywords:</b> Words that help others find your paper online.</li>
            </ul>
          </div><br>
          <div class="bg-white p-4 rounded shadow-lg" data-aos="fade-up" data-aos-delay="600">
            <h4 class="fw-bold text-primary">Conducting a Literature Review</h4>
            <p class="fs-5">
              A literature review is like a report on what other researchers have said about your topic. It helps you find gaps in knowledge and shows how your research fits in.
            </p>
            <ul class="list-unstyled text-start d-inline-block fs-5">
              <li><i class="bi bi-check-circle-fill text-success"></i> Read studies related to your topic.</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> Summarize their main points.</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> Point out what’s missing that your research will address.</li>
            </ul>
          </div><br>
          <div class="bg-white p-4 rounded shadow-lg" data-aos="fade-up" data-aos-delay="700">
            <h4 class="fw-bold text-primary">Methodology</h4>
            <p class="fs-5">This section explains how you did your research, including:</p>
            <ul class="list-unstyled text-start d-inline-block fs-5">
              <li><i class="bi bi-check-circle-fill text-success"></i> <b>Research Type:</b> Is it based on numbers (quantitative), stories (qualitative), or both?</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> <b>Participants:</b> Who was involved and how you chose them.</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> <b>Data Collection:</b> How you gathered info (e.g., surveys, interviews, experiments).</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> <b>Data Analysis:</b> How you made sense of the data (e.g., using math or finding patterns).</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> <b>Ethics:</b> How you kept things fair and private for participants.</li>
            </ul>
          </div><br>
          <div class="bg-white p-4 rounded shadow-lg" data-aos="fade-up" data-aos-delay="800">
            <h4 class="fw-bold text-primary">Results and Discussion</h4>
            <p class="fs-5">This part shares what you discovered and what it means:</p>
            <ul class="list-unstyled text-start d-inline-block fs-5">
              <li><i class="bi bi-check-circle-fill text-success"></i> Show your findings with graphs, tables, or descriptions.</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> Highlight the most important results and how they answer your question.</li>
            </ul>
          </div><br>
          <div class="bg-white p-4 rounded shadow-lg" data-aos="fade-up" data-aos-delay="900">
            <h4 class="fw-bold text-primary">Writing a Conclusion</h4>
            <p class="fs-5">
              The conclusion sums up what you found, why it matters, and what could be studied next. It’s your chance to leave a lasting impression!
            </p>
          </div><br>
          <div class="bg-white p-4 rounded shadow-lg" data-aos="fade-up" data-aos-delay="1000">
            <h4 class="fw-bold text-primary">Crafting a Great Abstract</h4>
            <p class="fs-5">An abstract is a short summary of your whole paper. It should be:</p>
            <ul class="list-unstyled text-start d-inline-block fs-5">
              <li><i class="bi bi-check-circle-fill text-success"></i> <b>Complete:</b> Include the problem, methods, results, and conclusion.</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> <b>Short:</b> Keep it brief, around 150–250 words.</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> <b>Clear:</b> Use simple words anyone can understand.</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> <b>Smooth:</b> Make sure ideas flow well from one to the next.</li>
            </ul>
            <p class="fs-5 mt-3">
              Mastering these research skills will help you create strong projects for school and beyond!
            </p>
          </div>
        </div>
      </section>`
  },{
    id: 11,
    content: `<section class="container mt-4" data-aos="fade-up">
        <h1 class="fw-bold text-primary text-center" data-aos="fade-up" data-aos-delay="100">Effective Negotiation Strategies</h1>
        <p class="text-muted text-center" data-aos="fade-up" data-aos-delay="200">By Mr. Shenal</p><br>
        <p class="fs-4 text-dark" data-aos="fade-up" data-aos-delay="300">
          Negotiation is like a friendly game of give-and-take to reach an agreement that works for everyone. This chapter will teach you how to negotiate like a pro!
        </p>
        <ul class="list-unstyled text-start d-inline-block fs-5" data-aos="fade-up" data-aos-delay="400">
          <li><i class="bi bi-check-circle-fill text-success"></i> <b>What is negotiation?</b></li>
          <li><i class="bi bi-check-circle-fill text-success"></i> <b>How to prepare and set goals</b></li>
          <li><i class="bi bi-check-circle-fill text-success"></i> <b>Tips to negotiate successfully</b></li>
        </ul>

        <div class="mt-4">
          <div class="bg-white p-4 rounded shadow-lg" data-aos="fade-up" data-aos-delay="500">
            <h4 class="fw-bold text-primary">What is Negotiation?</h4>
            <p class="fs-5">
              Negotiation is a conversation where two or more people work together to find a solution that makes everyone happy. It’s about listening, compromising, and solving problems.
            </p>
            <div class="row align-items-center mt-3">
              <div class="col-lg-5">
                <img src="${negotiationImage}" class="img-fluid rounded shadow-lg" alt="Negotiation Image" data-aos="zoom-in" data-aos-delay="600">
              </div>
              <div class="col-lg-7">
                <p class="fs-5">
                  This image shows people discussing ideas around a table, working together to reach an agreement.
                </p>
              </div>
            </div>
          </div><br>
          <div class="bg-white p-4 rounded shadow-lg" data-aos="fade-up" data-aos-delay="700">
            <h4 class="fw-bold text-primary">Prepare Thoroughly</h4>
            <p class="fs-5">
              Good preparation is the key to winning at negotiation. Here’s how to get ready:
            </p>
            <ul class="list-unstyled text-start d-inline-block fs-5">
              <li><i class="bi bi-check-circle-fill text-success"></i> <b>Do Your Homework:</b> Learn all the facts about the topic.</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> <b>Know What Everyone Wants:</b> Figure out what’s important to you and the other side.</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> <b>Respect Cultures:</b> Understand different traditions or ways of talking.</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> <b>Learn About Money and Books:</b> Know the costs and read up on the topic.</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> <b>Check the Rules:</b> Make sure you know any laws that apply.</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> <b>Be Fair:</b> Always negotiate honestly and respectfully.</li>
            </ul>
          </div><br>
          <div class="bg-white p-4 rounded shadow-lg" data-aos="fade-up" data-aos-delay="800">
            <h4 class="fw-bold text-primary">Set Clear Goals</h4>
            <p class="fs-5">Having clear goals keeps you focused during negotiation:</p>
            <ul class="list-unstyled text-start d-inline-block fs-5">
              <li><i class="bi bi-check-circle-fill text-success"></i> <b>Pick Your Top Goals:</b> Decide what matters most to you.</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> <b>Use Numbers:</b> Set specific targets, like a price or deadline.</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> <b>Know When to Walk Away:</b> Decide the point where you’ll stop if the deal isn’t good.</li>
            </ul>
          </div><br>
          <div class="bg-white p-4 rounded shadow-lg" data-aos="fade-up" data-aos-delay="900">
            <h4 class="fw-bold text-primary">Negotiate Like a Pro</h4>
            <p class="fs-5">Use these ideas to make your negotiation strong:</p>
            <ul class="list-unstyled text-start d-inline-block fs-5">
              <li><i class="bi bi-check-circle-fill text-success"></i> <b>BATNA (Best Backup Plan):</b> Know your next-best option if the talk fails.</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> <b>ZOPA (Agreement Zone):</b> Find the range where both sides can agree.</li>
            </ul>
          </div><br>
          <div class="bg-white p-4 rounded shadow-lg" data-aos="fade-up" data-aos-delay="1000">
            <h4 class="fw-bold text-primary">Tips for Successful Negotiation</h4>
            <p class="fs-5">Try these tricks to become a great negotiator:</p>
            <ul class="list-unstyled text-start d-inline-block fs-5">
              <li><i class="bi bi-check-circle-fill text-success"></i> <b>Be Friendly:</b> Build trust with the other person.</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> <b>Listen Carefully:</b> Really hear what the other side needs.</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> <b>Stay Cool:</b> Keep calm to think clearly.</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> <b>Get Creative:</b> Suggest new ideas to solve problems.</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> <b>Use Silence:</b> Pause to let the other person talk or think.</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> <b>Go Step by Step:</b> Break the talk into small parts to make progress.</li>
              <li><i class="bi bi-check-circle-fill text-success"></i> <b>Watch Body Language:</b> Notice their tone or gestures to understand their feelings.</li>
            </ul>
            <p class="fs-5 mt-3">
              These negotiation skills will help you work with others and get great results in school or life!
            </p>
          </div><br>
          
            
        </div>
      </section>`
  }
];

const BlogDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const blogPost = blogPosts.find((post) => post.id.toString() === id);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  if (!blogPost) {
    return (
      <div className="container text-center mt-5" data-aos="fade-up">
        <h2 className="text-danger">Post Not Found!</h2>
        <p className="text-muted">The blog post you are looking for does not exist.</p>
        <Link to="/assignment" className="btn btn-primary mt-3">
          Back to Assignments
        </Link>
      </div>
    );
  }

  return (
    <div className="container blog-details-container">
      <div className="row">
        <div className="col-lg-8">
          <div className="blog-post p-4 rounded shadow-lg" data-aos="fade-up">
            <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
            <div className="text-center mt-4" data-aos="fade-up" data-aos-delay="200">
              <Link to="/assignment" className="btn btn-primary btn-lg shadow-sm">
                Back to Assignments
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 sidebar ps-lg-4 ps-3">
          {/* Sidebar content can be added here, e.g., related posts, widgets */}
          <div className="bg-white p-4 rounded shadow-lg" data-aos="fade-up" data-aos-delay="300">
            <h4 className="fw-bold text-primary">Related Topics</h4>
            <ul className="list-unstyled">
              {blogPosts.map((post) => (
                <li key={post.id} className="mb-2">
                  <Link to={`/assignment/${post.id}`} className="text-primary">
                    {post.content.match(/<h1[^>]*>(.*?)<\/h1>/)?.[1] || `Post ${post.id}`}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;