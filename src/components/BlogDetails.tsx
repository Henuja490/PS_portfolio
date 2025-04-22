import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Blogdetails.css"; // Custom CSS for styling
import first from "./assets/Johari.jpg";
import second from "./assets/image.png";
import third from "./assets/cv1.jpg";
import fourth from "./assets/cv2.png";
import five from "./assets/portfolio.jpg";
import six from "./assets/portfolio2.jpg";
import seven from "./assets/email.jpg";
import eight from "./assets/EMAIL2.jpg";
import nine from "./assets/Black_Doodle_Tools_for_Generating_Ideas_Mind_Map[1].png";
import ten from "./assets/1.pdf";
import image5 from "./assets/5.jpg";
import image7 from "./assets/7.jpg";
import image8 from "./assets/work.jpg";
import image9 from "./assets/work2.jpg";
import image10 from "./assets/MEAL.jpg";
import image11 from "./assets/din2.jpg";
import image12 from "./assets/din3.jpg";

// Initialize AOS
const initializeAOS = () => {
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
};

type BlogPost = {
  id: number;
  content: string;
  title: string;
  subtitle: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Mastering Professional Skills",
    subtitle: "Building the Foundation for Career Success",
    content: `
      <section class="container mt-5">
        <div class="text-center mb-5" data-aos="fade-up">
          <h1 class="display-4 fw-bold text-primary">Mastering Professional Skills</h1>
          <p class="lead text-muted">By Miss Ishara Raviharee Weerasinghe</p>
          <p class="text-dark fs-5">In today’s dynamic workplace, professional skills—often called soft skills—are the cornerstone of career success. This lecture offered a deep dive into their importance, providing actionable insights to enhance personal and professional growth.</p>
        </div>
        <div class="bg-white p-5 rounded shadow-lg" data-aos="fade-up" data-aos-delay="100">
          <h3 class="fw-bold text-primary mb-4">What Are Professional Skills?</h3>
          <p class="fs-5 text-dark">
            Professional skills encompass interpersonal and emotional competencies that complement technical expertise. Unlike hard skills, which are job-specific, soft skills like communication, teamwork, and adaptability are universally applicable. This session explored:
          </p>
          <ul class="list-unstyled fs-5">
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> The definition and scope of professional skills</li>
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> Their critical role in fostering career advancement</li>
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> Practical strategies for developing and mastering these skills</li>
          </ul>
          <p class="fs-5 text-dark mt-4">
            For example, effective communication ensures clarity in team projects, while adaptability allows professionals to thrive in fast-paced environments. These skills create a positive workplace culture and open doors to leadership opportunities.
          </p>
        </div>
        <div class="bg-light p-5 rounded shadow-lg mt-5" data-aos="zoom-in" data-aos-delay="200">
          <h3 class="fw-bold text-primary mb-4">The Johari Window:izion</h3>
          <div class="row align-items-center">
            <div class="col-lg-6" data-aos="fade-right" data-aos-delay="300">
              <img src=${first} class="img-fluid rounded shadow-lg" alt="Johari Window" />
            </div>
            <div class="col-lg-6" data-aos="fade-left" data-aos-delay="400">
              <p class="fs-5 text-dark">
                The Johari Window, developed by Joseph Luft and Harrington Ingham, is a transformative tool for self-awareness. It categorizes personal traits into four quadrants: open, hidden, blind, and unknown. By understanding how we perceive ourselves versus how others see us, we can improve communication, build trust, and foster personal growth. In class, we analyzed real-life scenarios to apply this model, gaining insights into our strengths and areas for improvement.
              </p>
            </div>
          </div>
        </div>
        <div class="bg-white p-5 rounded shadow-lg mt-5" data-aos="fade-up" data-aos-delay="500">
          <h3 class="fw-bold text-primary mb-4">Practical Tips for Skill Development</h3>
          <p class="fs-5 text-dark">
            Developing professional skills requires intentional effort and practice. Here are actionable tips shared during the lecture:
          </p>
          <ul class="list-unstyled fs-5">
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> Step out of your comfort zone by taking on new challenges, such as leading a project.</li>
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> Seek constructive feedback from peers and mentors to identify growth areas.</li>
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> Commit to continuous learning through workshops, courses, or reading.</li>
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> Collaborate with diverse teams to enhance teamwork and problem-solving skills.</li>
          </ul>
          <p class="fs-5 text-dark mt-4">
            This lecture was a game-changer, equipping us with tools to navigate professional challenges and build meaningful workplace relationships.
          </p>
        </div>
      </section>
    `,
  },
  {
    id: 2,
    title: "Crafting a Winning CV and Cover Letter",
    subtitle: "Your Key to Unlocking Career Opportunities",
    content: `
      <section class="container mt-5">
        <div class="text-center mb-5" data-aos="fade-up">
          <h1 class="display-4 fw-bold text-primary">Crafting a Winning CV and Cover Letter</h1>
          <p class="lead text-muted">By Miss Ishara Raviharee Weerasinghe</p>
          <p class="text-dark fs-5">A well-crafted CV and cover letter are your first impression in the job market. This lecture provided a comprehensive guide to creating documents that showcase your skills and stand out to employers.</p>
        </div>
        <div class="bg-white p-5 rounded shadow-lg" data-aos="fade-up" data-aos-delay="100">
          <h3 class="fw-bold text-primary mb-4">The Anatomy of a Professional CV</h3>
          <p class="fs-5 text-dark">
            A curriculum vitae (CV) is a detailed summary of your education, experience, skills, and achievements. It’s more than a resume—it’s a narrative of your professional journey. Key takeaways included:
          </p>
          <ul class="list-unstyled fs-5">
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> Structuring a CV with clear sections: header, summary, experience, education, and skills.</li>
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> Tailoring content to match job descriptions, using relevant keywords.</li>
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> Highlighting achievements with quantifiable metrics (e.g., “Increased sales by 20%”).</li>
          </ul>
          <p class="fs-5 text-dark mt-4">
            For instance, a marketing professional might emphasize campaign successes, while a software developer would highlight technical certifications. Tailoring ensures your CV passes automated applicant tracking systems and resonates with hiring managers.
          </p>
        </div>
        <div class="bg-light p-5 rounded shadow-lg mt-5" data-aos="zoom-in" data-aos-delay="200">
          <h3 class="fw-bold text-primary mb-4">Writing a Compelling Cover Letter</h3>
          <p class="fs-5 text-dark">
            A cover letter complements your CV by telling a story about why you’re the perfect fit. We learned to:
          </p>
          <ul class="list-unstyled fs-5">
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> Start with a strong opening, mentioning the job and source of the posting.</li>
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> Highlight relevant skills with specific examples (e.g., “Led a team of 5 to deliver a project under budget”).</li>
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> Express enthusiasm for the role and company, showing research and alignment with their values.</li>
          </ul>
          <div class="row mt-4">
            <div class="col-lg-6" data-aos="fade-right" data-aos-delay="300">
              <img src=${third} class="img-fluid rounded shadow-lg" alt="CV Example 1" />
            </div>
            <div class="col-lg-6" data-aos="fade-left" data-aos-delay="400">
              <img src=${fourth} class="img-fluid rounded shadow-lg" alt="CV Example 2" />
            </div>
          </div>
          <p class="fs-5 text-dark mt-4">
            In a class activity, we filled out CV templates and drafted cover letters for sample job ads. This hands-on practice helped us understand how to align our documents with employer expectations.
          </p>
        </div>
        <div class="bg-white p-5 rounded shadow-lg mt-5" data-aos="fade-up" data-aos-delay="500">
          <h3 class="fw-bold text-primary mb-4">Key Takeaways</h3>
          <p class="fs-5 text-dark">
            This lecture emphasized the importance of customization and clarity. A tailored CV and cover letter demonstrate genuine interest, showcase relevant skills, and increase your chances of landing an interview. By mastering these tools, we’re better equipped to navigate the competitive job market.
          </p>
        </div>
      </section>
    `,
  },
  {
    id: 3,
    title: "Portfolio Management",
    subtitle: "Showcasing Your Skills and Achievements",
    content: `
      <section class="container mt-5">
        <div class="text-center mb-5" data-aos="fade-up">
          <h1 class="display-4 fw-bold text-primary">Portfolio Management</h1>
          <p class="lead text-muted">By Miss Ishara Raviharee Weerasinghe</p>
          <p class="text-dark fs-5">A portfolio is a powerful tool to display your work and achievements. This lecture explored how to create, manage, and leverage portfolios for professional and academic success.</p>
        </div>
        <div class="bg-white p-5 rounded shadow-lg" data-aos="fade-up" data-aos-delay="100">
          <h3 class="fw-bold text-primary mb-4">Why Portfolios Matter</h3>
          <p class="fs-5 text-dark">
            Portfolios are more than collections of work—they’re a testament to your skills, creativity, and growth. They serve multiple purposes, such as:
          </p>
          <ul class="list-unstyled fs-5">
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> Enhancing job applications by showcasing tangible evidence of skills.</li>
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> Supporting career advancement through documented achievements.</li>
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> Building personal branding for freelancers, creatives, and entrepreneurs.</li>
          </ul>
          <p class="fs-5 text-dark mt-4">
            For example, a graphic designer’s portfolio might include branding projects, while a developer’s could feature GitHub repositories. Portfolios make your capabilities visible and memorable.
          </p>
        </div>
        <div class="bg-light p-5 rounded shadow-lg mt-5" data-aos="zoom-in" data-aos-delay="200">
          <h3 class="fw-bold text-primary mb-4">Types of Portfolios</h3>
          <p class="fs-5 text-dark">
            We explored various portfolio types, each tailored to specific goals:
          </p>
          <ul class="list-unstyled fs-5">
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> <b>Personal Portfolio:</b> Highlights creative works, projects, and passions.</li>
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> <b>Career/Dossier Portfolio:</b> Includes resumes, references, and professional experience.</li>
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> <b>Employment Portfolio:</b> Focuses on work-related accomplishments and skills.</li>
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> <b>Assessment Portfolio:</b> Tracks learning progress for educational purposes.</li>
          </ul>
          <div class="row mt-4">
            <div class="col-lg-6" data-aos="fade-right" data-aos-delay="300">
              <img src=${six} class="img-fluid rounded shadow-lg" alt="Portfolio Example" />
            </div>
            <div class="col-lg-6" data-aos="fade-left" data-aos-delay="400">
              <p class="fs-5 text-dark">
                In a class discussion, we analyzed sample portfolios to understand their structure and impact. This exercise highlighted the importance of curating content that aligns with your career goals.
              </p>
            </div>
          </div>
        </div>
        <div class="bg-white p-5 rounded shadow-lg mt-5" data-aos="fade-up" data-aos-delay="500">
          <h3 class="fw-bold text-primary mb-4">Creating Portfolios Online</h3>
          <p class="fs-5 text-dark">
            Online platforms make portfolio creation accessible and professional. Recommended tools include:
          </p>
          <ul class="list-unstyled fs-5">
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> <b>LinkedIn:</b> For professional networking and showcasing achievements.</li>
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> <b>Behance:</b> Ideal for designers and creatives to display visual work.</li>
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> <b>GitHub:</b> Perfect for developers to share code and projects.</li>
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> <b>WordPress/Wix:</b> For customizable portfolio websites.</li>
          </ul>
          <p class="fs-5 text-dark mt-4">
            By leveraging these platforms, you can create a polished portfolio that reflects your unique strengths and attracts opportunities.
          </p>
        </div>
      </section>
    `,
  },
  {
    id: 4,
    title: "Email Etiquette",
    subtitle: "Mastering Professional Communication",
    content: `
      <section class="container mt-5">
        <div class="text-center mb-5" data-aos="fade-up">
          <h1 class="display-4 fw-bold text-primary">Email Etiquette</h1>
          <p class="lead text-muted">By Miss Ishara Raviharee Weerasinghe</p>
          <p class="text-dark fs-5">Emails are a cornerstone of professional communication. This lecture provided a roadmap for crafting clear, courteous, and effective emails.</p>
        </div>
        <div class="bg-white p-5 rounded shadow-lg" data-aos="fade-up" data-aos-delay="100">
          <h3 class="fw-bold text-primary mb-4">Understanding Email Etiquette</h3>
          <p class="fs-5 text-dark">
            Etiquette refers to the norms governing polite behavior. In emails, it ensures messages are professional and respectful. Key rules include:
          </p>
          <ul class="list-unstyled fs-5">
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> Using a clear, specific subject line to set expectations.</li>
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> Addressing recipients by name for a personal touch.</li>
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> Avoiding all caps, which can seem aggressive.</li>
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> Proofreading for grammar and spelling to maintain credibility.</li>
          </ul>
          <p class="fs-5 text-dark mt-4">
            For example, a subject line like “Meeting Request – Project Update” is far more effective than a vague “Hi.” Proper etiquette builds trust and enhances communication.
          </p>
        </div>
        <div class="bg-light p-5 rounded shadow-lg mt-5" data-aos="zoom-in" data-aos-delay="200">
          <h3 class="fw-bold text-primary mb-4">Advantages and Disadvantages of Emails</h3>
          <div class="row">
            <div class="col-lg-6" data-aos="fade-right" data-aos-delay="300">
              <img src=${seven} class="img-fluid rounded shadow-lg" alt="Email Example" />
              <p class="fs-5 text-dark mt-4">
                <b>Advantages:</b> Emails are fast, cost-effective, and provide a written record. They support attachments, making them versatile for sharing documents or images.
              </p>
            </div>
            <div class="col-lg-6" data-aos="fade-left" data-aos-delay="400">
              <img src=${eight} class="img-fluid rounded shadow-lg" alt="Email Risks" />
              <p class="fs-5 text-dark mt-4">
                <b>Disadvantages:</b> Emails lack tone and body language, risking miscommunication. They can also lead to information overload or security threats like phishing.
              </p>
            </div>
          </div>
          <p class="fs-5 text-dark mt-4">
            In a class activity, we reviewed sample emails to identify etiquette errors, reinforcing the importance of clarity and professionalism.
          </p>
        </div>
        <div class="bg-white p-5 rounded shadow-lg mt-5" data-aos="fade-up" data-aos-delay="500">
          <h3 class="fw-bold text-primary mb-4">Meetings and Email Integration</h3>
          <p class="fs-5 text-dark">
            Emails often facilitate meetings by sharing agendas or follow-ups. We explored this through a class activity, reviewing a meeting-related document:
          </p>
          <iframe src=${ten} width="100%" height="600px" style="border: none;" data-aos="fade-up" data-aos-delay="600"></iframe>
          <p class="fs-5 text-dark mt-4">
            This lecture underscored the power of well-crafted emails to streamline communication and project professionalism in academic and business settings.
          </p>
        </div>
      </section>
    `,
  },
  {
    id: 5,
    title: "Telephone Etiquette",
    subtitle: "Professional Communication Over the Phone",
    content: `
      <section class="container mt-5">
        <div class="text-center mb-5" data-aos="fade-up">
          <h1 class="display-4 fw-bold text-primary">Telephone Etiquette</h1>
          <p class="lead text-muted">By Miss Ishara Raviharee Weerasinghe</p>
          <p class="text-dark fs-5">Effective phone communication is a vital professional skill. This lecture provided guidelines for clear, courteous, and professional telephone interactions.</p>
        </div>
        <div class="bg-white p-5 rounded shadow-lg" data-aos="fade-up" data-aos-delay="100">
          <h3 class="fw-bold text-primary mb-4">General Rules for Telephone Use</h3>
          <p class="fs-5 text-dark">
            Proper telephone etiquette ensures smooth and professional conversations. Key guidelines include:
          </p>
          <ul class="list-unstyled fs-5">
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> Answer calls within 2-3 rings to show responsiveness.</li>
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> Speak clearly into the mouthpiece, avoiding distractions like eating.</li>
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> Use the hold button appropriately, checking back if delays occur.</li>
          </ul>
          <p class="fs-5 text-dark mt-4">
            For example, answering promptly with a greeting like “Hello, this is [Your Name]” sets a professional tone and builds rapport with the caller.
          </p>
        </div>
        <div class="bg-light p-5 rounded shadow-lg mt-5" data-aos="zoom-in" data-aos-delay="200">
          <h3 class="fw-bold text-primary mb-4">Greeting and Managing Calls</h3>
          <p class="fs-5 text-dark">
            How you greet and manage calls reflects your professionalism. We learned tailored greetings based on context:
          </p>
          <ul class="list-unstyled fs-5">
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> Large organizations: “Thank you for calling [Department]. How may I assist you?”</li>
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> Small businesses: “Thank you for calling [Company]. How can I help?”</li>
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> Departments: “[Department], [Your Name], how may I assist?”</li>
          </ul>
          <p class="fs-5 text-dark mt-4">
            When transferring calls, always ask permission and ensure the receiving party is available. This prevents frustration and maintains a positive caller experience.
          </p>
        </div>
        <div class="bg-white p-5 rounded shadow-lg mt-5" data-aos="fade-up" data-aos-delay="500">
          <h3 class="fw-bold text-primary mb-4">Professional Language and Closure</h3>
          <p class="fs-5 text-dark">
            Using polite, positive language and ending calls gracefully are key. Tips include:
          </p>
          <ul class="list-unstyled fs-5">
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> Replace negative phrases (e.g., “I can’t”) with constructive responses (e.g., “Let me find a solution”).</li>
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> Summarize the conversation before closing.</li>
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> End with phrases like “Is there anything else I can assist with?” and thank the caller.</li>
          </ul>
          <p class="fs-5 text-dark mt-4">
            In a role-play activity, we practiced answering and managing calls, reinforcing the importance of tone, clarity, and courtesy. These skills ensure productive and professional phone interactions.
          </p>
        </div>
      </section>
    `,
  },
  {
    id: 6,
    title: "Food Festival",
    subtitle: "A Hands-On Lesson in Teamwork and Business Skills",
    content: `
      <section class="container mt-5">
        <div class="text-center mb-5" data-aos="fade-up">
          <h1 class="display-4 fw-bold text-primary">Food Festival</h1>
          <p class="lead text-muted">Group Activity of the Module</p>
          <p class="text-dark fs-5">This group activity brought our professional skills to life as we organized a food festival, managed a stall, and sold diverse food items. It was a vibrant blend of fun and learning.</p>
        </div>
        <div class="bg-white p-5 rounded shadow-lg" data-aos="fade-up" data-aos-delay="100">
          <h3 class="fw-bold text-primary mb-4">Overview of the Food Festival</h3>
          <p class="fs-5 text-dark">
            The food festival was a practical exercise in applying skills like teamwork, negotiation, and customer service. Each group set up a stall, planned a menu, and managed sales, simulating real-world business operations. This hands-on experience tested our ability to collaborate under pressure and deliver results.
          </p>
        </div>
        <div class="bg-light p-5 rounded shadow-lg mt-5" data-aos="zoom-in" data-aos-delay="200">
          <h3 class="fw-bold text-primary mb-4">Our Stall: Menu and Operations</h3>
          <p class="fs-5 text-dark">
            Our stall offered a variety of delicious items, carefully chosen to appeal to diverse tastes:
          </p>
          <ul class="list-unstyled fs-5">
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> Kottu: A popular stir-fried dish with chopped roti and spices.</li>
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> Parata: Flaky, layered flatbread served with curry.</li>
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> Pickles: Mango, Amberella, Jambu, and Lovi for tangy flavor.</li>
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> Faluda: A refreshing rose-flavored dessert drink.</li>
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> Milk Toffee: Sweet, chewy confections.</li>
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> Chicken Bun: Savory buns with spiced chicken filling.</li>
          </ul>
          <div class="row mt-4">
            <div class="col-lg-6" data-aos="fade-right" data-aos-delay="300">
              <img src=${image5} class="img-fluid rounded shadow-lg" alt="Food Festival Stall" />
            </div>
            <div class="col-lg-6" data-aos="fade-left" data-aos-delay="400">
              <img src=${image7} class="img-fluid rounded shadow-lg" alt="Food Festival Activity" />
            </div>
          </div>
          <p class="fs-5 text-dark mt-4">
            Managing the stall required dividing tasks—some prepared food, others handled sales, and a few focused on customer engagement. This taught us the value of clear roles and coordination.
          </p>
        </div>
        <div class="bg-white p-5 rounded shadow-lg mt-5" data-aos="fade-up" data-aos-delay="500">
          <h3 class="fw-bold text-primary mb-4">Skills in Action</h3>
          <p class="fs-5 text-dark">
            The festival was a real-world application of our lecture topics:
          </p>
          <ul class="list-unstyled fs-5">
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> <b>Negotiation:</b> Convincing customers to try our items and managing pricing discussions.</li>
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> <b>Communication:</b> Engaging customers with enthusiasm and clarity.</li>
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> <b>Teamwork:</b> Collaborating to ensure smooth operations, from setup to cleanup.</li>
          </ul>
          <p class="fs-5 text-dark mt-4">
            This activity was both enjoyable and educational, reinforcing how professional skills translate into practical success. It left us confident in our ability to work as a team and engage with customers effectively.
          </p>
        </div>
      </section>
    `,
  },
  {
    id: 7,
    title: "Job Interview Guide",
    subtitle: "Strategies for Confidence and Success",
    content: `
      <section class="container mt-5">
        <div class="text-center mb-5" data-aos="fade-up">
          <h1 class="display-4 fw-bold text-primary">Job Interview Guide</h1>
          <p class="lead text-muted">Essential Tips for Successful Interviews</p>
          <p class="text-dark fs-5">Interviews are your chance to shine. This lecture provided a comprehensive guide to preparing, communicating, and succeeding in job interviews.</p>
        </div>
        <div class="bg-white p-5 rounded shadow-lg" data-aos="fade-up" data-aos-delay="100">
          <h3 class="fw-bold text-primary mb-4">Effective Communication in Interviews</h3>
          <p class="fs-5 text-dark">
            Communication is the heart of a successful interview. Both verbal and non-verbal skills matter:
          </p>
          <ul class="list-unstyled fs-5">
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> Maintain eye contact and smile to build rapport.</li>
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> Use confident body language, like sitting upright and gesturing naturally.</li>
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> Speak clearly and concisely, avoiding filler words like “um” or “like.”</li>
          </ul>
          <p class="fs-5 text-dark mt-4">
            For instance, a firm handshake and steady eye contact can convey confidence, while slouching might suggest disinterest. These cues significantly influence the interviewer’s perception.
          </p>
        </div>
        <div class="bg-light p-5 rounded shadow-lg mt-5" data-aos="zoom-in" data-aos-delay="200">
          <h3 class="fw-bold text-primary mb-4">Strategic Interview Preparation</h3>
          <p class="fs-5 text-dark">
            Preparation is key to standing out. We learned to address three critical questions:
          </p>
          <ul class="list-unstyled fs-5">
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> What do I want the interviewer to know about my strengths?</li>
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> How can I minimize the impact of my weaknesses?</li>
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> What do I need to learn about the company to show interest?</li>
          </ul>
          <p class="fs-5 text-dark mt-4">
            Researching the company’s mission, values, and recent achievements allows you to tailor your responses. For example, mentioning a recent company milestone during the interview demonstrates genuine interest.
          </p>
        </div>
        <div class="bg-white p-5 rounded shadow-lg mt-5" data-aos="fade-up" data-aos-delay="500">
          <h3 class="fw-bold text-primary mb-4">Common Questions and Winning Answers</h3>
          <p class="fs-5 text-dark">
            We practiced responding to common questions, such as: <b>“Tell us about a challenge you faced and how you handled it.”</b>
          </p>
          <p class="fs-5 text-dark">
            <b>Sample Answer:</b> “In my previous role, we faced a tight project deadline. I took the lead, delegated tasks based on team strengths, and communicated daily updates. We delivered the project on time, exceeding client expectations.”
          </p>
          <p class="fs-5 text-dark mt-4">
            Using the STAR method (Situation, Task, Action, Result) ensures responses are structured and impactful. This approach highlights your problem-solving skills and achievements.
          </p>
        </div>
        <div class="bg-light p-5 rounded shadow-lg mt-5" data-aos="fade-up" data-aos-delay="600">
          <h3 class="fw-bold text-primary mb-4">Final Tips for Success</h3>
          <p class="fs-5 text-dark">
            To excel in interviews, consider these tips:
          </p>
          <ul class="list-unstyled fs-5">
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> Dress appropriately, aligning with the company’s culture (e.g., business formal for corporate roles).</li>
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> Practice with mock interviews to build confidence.</li>
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> Ask insightful questions, like “What does success look like in this role?”</li>
          </ul>
          <p class="fs-5 text-dark mt-4">
            This lecture equipped us with strategies to approach interviews with confidence, ensuring we leave a lasting, positive impression.
          </p>
        </div>
      </section>
    `,
  },
  {
    id: 8,
    title: "Emotional Intelligence",
    subtitle: "The Key to Personal and Professional Growth",
    content: `
      <section class="container mt-5">
        <div class="text-center mb-5" data-aos="fade-up">
          <h1 class="display-4 fw-bold text-primary">Emotional Intelligence</h1>
          <p class="lead text-muted">Understanding and Applying Emotional Intelligence</p>
          <p class="text-dark fs-5">Emotional Intelligence (EI) is the ability to understand and manage emotions—your own and others’. This lecture explored EI’s role in fostering relationships, leadership, and personal fulfillment.</p>
        </div>
        <div class="bg-white p-5 rounded shadow-lg" data-aos="fade-up" data-aos-delay="100">
          <h3 class="fw-bold text-primary mb-4">What is Emotional Intelligence?</h3>
          <p class="fs-5 text-dark">
            Defined by Salovey and Mayer (1990), EI involves perceiving, understanding, using, and managing emotions effectively. Unlike IQ, which measures cognitive ability, EI (or EQ) focuses on emotional awareness. For example, a manager with high EI can motivate a struggling team by empathizing and offering constructive feedback.
          </p>
        </div>
        <div class="bg-light p-5 rounded shadow-lg mt-5" data-aos="zoom-in" data-aos-delay="200">
          <h3 class="fw-bold text-primary mb-4">The Five Domains of EI</h3>
          <p class="fs-5 text-dark">
            Daniel Goleman’s EI framework outlines five domains critical for emotional and social success:
          </p>
          <ul class="list-unstyled fs-5">
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> <b>Self-Awareness:</b> Recognizing your emotions and their impact. E.g., understanding when stress affects your decisions.</li>
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> <b>Self-Regulation:</b> Controlling emotions constructively. E.g., staying calm during a heated discussion.</li>
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> <b>Motivation:</b> Pursuing goals with resilience and optimism. E.g., persisting after a project setback.</li>
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> <b>Empathy:</b> Understanding others’ emotions to build trust. E.g., supporting a struggling colleague.</li>
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> <b>Social Skills:</b> Navigating relationships and conflicts effectively. E.g., mediating team disputes.</li>
          </ul>
          <div class="row mt-4">
            <div class="col-lg-6" data-aos="fade-right" data-aos-delay="300">
              <img src=${image8} class="img-fluid rounded shadow-lg" alt="Self-Awareness Exercise" />
            </div>
            <div class="col-lg-6" data-aos="fade-left" data-aos-delay="400">
              <img src=${image9} class="img-fluid rounded shadow-lg" alt="Empathy Mapping" />
            </div>
          </div>
          <p class="fs-5 text-dark mt-4">
            Through class activities, like role-playing empathy scenarios, we practiced applying these domains, gaining insights into our emotional strengths and areas for growth.
          </p>
        </div>
        <div class="bg-white p-5 rounded shadow-lg mt-5" data-aos="fade-up" data-aos-delay="500">
          <h3 class="fw-bold text-primary mb-4">EI in Leadership and Daily Life</h3>
          <p class="fs-5 text-dark">
            EI is a hallmark of effective leadership. Leaders with high EI inspire teams, manage conflicts, and foster collaboration. Beyond the workplace, EI reduces stress, enhances decision-making, and strengthens relationships. For instance, empathizing with a friend’s struggles can deepen your connection.
          </p>
          <p class="fs-5 text-dark mt-4">
            This lecture highlighted EI’s transformative power, equipping us to navigate complex emotions and build meaningful connections in all areas of life.
          </p>
        </div>
      </section>
    `,
  },
  {
    id: 9,
    title: "Dining Etiquette",
    subtitle: "Mastering the Art of Professional Dining",
    content: `
      <section class="container mt-5">
        <div class="text-center mb-5" data-aos="fade-up">
          <h1 class="display-4 fw-bold text-primary">Dining Etiquette</h1>
          <p class="lead text-muted">Polishing Your Professional Presence</p>
          <p class="text-dark fs-5">Dining etiquette is more than table manners—it’s about projecting professionalism and confidence in formal settings. This lecture provided a detailed guide to navigating dining scenarios with grace.</p>
        </div>
        <div class="bg-white p-5 rounded shadow-lg" data-aos="fade-up" data-aos-delay="100">
          <h3 class="fw-bold text-primary mb-4">The Formal Dining Setup</h3>
          <div class="row">
            <div class="col-lg-6" data-aos="fade-right" data-aos-delay="200">
              <img src=${image10} class="img-fluid rounded shadow-lg" alt="Dining Setup" />
            </div>
            <div class="col-lg-6" data-aos="fade-left" data-aos-delay="300">
              <p class="fs-5 text-dark">
                A formal dining table is meticulously arranged, with utensils placed for specific courses. The rule is simple: start with the outermost utensil and work inward. For example, the salad fork is typically outside the dinner fork, used first if salad is the initial course.
              </p>
            </div>
          </div>
          <p class="fs-5 text-dark mt-4">
            We also learned napkin etiquette: unfold the napkin into a triangle or rectangle and place it on your lap. Avoid crumpling it or using it as a bib. These small details signal refinement and attention to protocol.
          </p>
        </div>
        <div class="bg-light p-5 rounded shadow-lg mt-5" data-aos="zoom-in" data-aos-delay="200">
          <h3 class="fw-bold text-primary mb-4">Dining Manners and Techniques</h3>
          <p class="fs-5 text-dark">
            Proper manners enhance the dining experience. Key tips include:
          </p>
          <ul class="list-unstyled fs-5">
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> Take small bites and chew with your mouth closed.</li>
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> Break bread into small pieces before eating, using your bread plate.</li>
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> Pass salt and pepper together, even if only one is requested.</li>
          </ul>
          <p class="fs-5 text-dark mt-4">
            We also explored utensil techniques, like the <b>Pencil Method</b> (holding utensils like a pencil) and <b>Scalpel Method</b> (tines down, pressing with the index finger). These methods ensure precision and elegance while eating.
          </p>
          <div class="row mt-4">
            <div class="col-lg-6" data-aos="fade-right" data-aos-delay="300">
              <img src=${image11} class="img-fluid rounded shadow-lg" alt="Dining Style 1" />
            </div>
            <div class="col-lg-6" data-aos="fade-left" data-aos-delay="400">
              <img src=${image12} class="img-fluid rounded shadow-lg" alt="Dining Style 2" />
            </div>
          </div>
        </div>
        <div class="bg-white p-5 rounded shadow-lg mt-5" data-aos="fade-up" data-aos-delay="500">
          <h3 class="fw-bold text-primary mb-4">Business Etiquette and First Impressions</h3>
          <p class="fs-5 text-dark">
            Dining etiquette is part of broader business etiquette, which includes:
          </p>
          <ul class="list-unstyled fs-5">
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> Workplace etiquette: Respecting colleagues and hierarchies.</li>
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> Communication etiquette: Using clear, professional language.</li>
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> Meeting etiquette: Arriving prepared and on time.</li>
          </ul>
          <p class="fs-5 text-dark mt-4">
            First impressions are critical. A genuine smile, warm greeting, proper eye contact, and neat grooming create a positive impact. For example, arriving at a business dinner well-dressed and engaging actively sets a professional tone.
          </p>
          <p class="fs-5 text-dark mt-4">
            This lecture equipped us with the skills to navigate formal dining with confidence, enhancing our professional presence in business and social settings.
          </p>
        </div>
      </section>
    `,
  },
];

const BlogDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const blogPost = blogPosts.find((post) => post.id.toString() === id);

  useEffect(() => {
    initializeAOS();
    AOS.refresh();
  }, []);

  if (!blogPost) {
    return (
      <div className="container text-center mt-5" data-aos="fade-in">
        <h2 className="text-danger display-5 fw-bold">Post Not Found!</h2>
        <p className="text-muted fs-4">The blog post you are looking for does not exist.</p>
        <Link to="/assignment" className="btn btn-primary btn-lg shadow-sm animate-button">
          Back to Assignments
        </Link>
      </div>
    );
  }

  return (
    <div className="blog-details-container py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="blog-post bg-white p-5 rounded shadow-lg" data-aos="fade-up">
              <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
              <div className="text-center mt-5">
                <Link
                  to="/assignment"
                  className="btn btn-primary btn-lg shadow-sm animate-button"
                >
                  Back to Assignments
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;