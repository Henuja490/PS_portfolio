import React from 'react';
import { useParams } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
type BlogPost = {
  id: number;
  content: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    content: `
    <section class="container mt-5">
    
        <h1 class="text-center fw-bold text-primary" style="font-size: 2.3rem;">Introduction to Professional Skills</h1>
        <p class=" text-center text-muted" style="font-size: 1.2rem;">By Miss Ishara Raviharee Weerasinghe</p><br>
        <p class="fs-5 text-dark" style="font-size: 1.4rem;">
            In this lecture, we explored various professional skills and their importance in the modern workplace. Key topics discussed include:
        </p>
        <ul class="list-unstyled text-start d-inline-block" style="font-size: 1.3rem;">
            <li><i class="bi bi-check-circle-fill text-success"></i> <b>What are Professional Skills?</b></li>
            <li><i class="bi bi-check-circle-fill text-success"></i> <b>Why are Professional Skills Crucial for Career Growth?</b></li>
            <li><i class="bi bi-check-circle-fill text-success"></i> <b>How to Develop and Master Professional Skills?</b></li>
        </ul>
    </div>

    <div class="mt-5">
        <div class="bg-white p-4 rounded shadow-lg">
            <h3 class="fw-bold text-primary" style="font-size: 2.3rem;">Defining Professional Skills</h3>
            <p style="font-size: 1.3rem;">
                Professional skills, also known as soft skills or interpersonal skills, are crucial for success in any career. These skills go beyond technical expertise, focusing on communication, problem-solving, and teamwork. They are essential for building relationships, managing tasks effectively, and contributing to a positive workplace environment.
            </p>
            <h4 style="font-size: 1.6rem;">Examples of Professional Skills</h4>
            <p style="font-size: 1.3rem;"><b>Effective communication, collaboration, conflict resolution, adaptability, leadership, emotional intelligence.</b></p>
         </div><br>
         <div class="bg-white p-4 rounded shadow-lg">
            <h3 class="fw-bold text-primary mt-4" style="font-size: 2.3rem;">Key Skills for Career Advancement</h3>
            <p style="font-size: 1.3rem;">
                In the modern job market, a combination of technical and soft skills is necessary for career success. Skills like critical thinking, leadership, and communication are essential in almost any role, making it important to continuously develop them.
            </p>

            <h3 class="fw-bold text-primary mt-4" style="font-size: 2.3rem;">Activity: Group Discussion and Reflection</h3>
            <p style="font-size: 1.3rem;">
                In class, we participated in a group activity where we discussed and analyzed different real-life scenarios, highlighting the importance of key professional skills. Afterward, we shared our insights and received valuable feedback from our lecturer.
            </p>
</div><br>
<div class="bg-white p-4 rounded shadow-lg">
            <h3 class="fw-bold text-primary mt-4" style="font-size: 2.3rem;">Johari Window: Enhancing Self-Awareness</h3>
            <div class="row align-items-center mt-4">
                <div class="col-lg-5">
                    <img src="assets/img/weekdetails/johari.png" class="img-fluid rounded shadow-lg" alt="Johari Window">
                </div>
                <div class="col-lg-7">
                    <p style="font-size: 1.3rem;">
                        The Johari Window model, created by Joseph Luft and Harrington Ingham, promotes self-awareness by helping individuals understand the differences between how they see themselves and how others perceive them. This concept is a valuable tool for personal and professional growth.
                    </p>
                </div>
            </div>

            <div class="bg-light p-4 rounded mt-5">
                <h3 class="fw-bold text-primary" style="font-size: 2.3rem;">Practical Tips for Improving Professional Skills</h3>
                <ul style="font-size: 1.3rem;">
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
    content: `<section class="container mt-5">
    <h1 class="fw-bold text-primary text-center" style="font-size: 2.5rem;">CV Writing and Writing Cover Letters</h1>
    <p class="text-center">By Miss Ishara Raviharee Weerasinghe </p> 
    <div class= bg-white p-4 rounded shadow-lg">
         
        <p style="font-size: 1.4rem; color: darkslategrey;">
            In this lecture, we discussed how to create a professional curriculum vitae (CV). A CV is a very important document that gives someone an overall idea about the person. So basically, in this lecture, we discussed CV writing and cover letter writing. <br> So, what are the main points?
        </p>
        <div class="text-left">
        <ul style="font-size: 1.3rem;">
            <li><i class="bi bi-check-circle-fill"></i> <span><b>Identify the structure of a CV</b></span></li>
            <li><i class="bi bi-check-circle-fill"></i> <span><b>Recognize the registers used in cover letter writing</b></span></li>
            <li><i class="bi bi-check-circle-fill"></i> <span><b>Create a professional CV</b></span></li>
        </ul>
        </div>
    </div>
    
    <div class="mt-5">
        <div class="bg-white p-4 rounded shadow-lg">
            <h3 class="fw-bold text-primary" style="font-size: 2.3rem;">What is a CV?</h3>
            <p style="font-size: 1.3rem;">
                A Curriculum Vitae (CV) is an extensive document that provides a summary of your training, professional background, achievements, abilities, and more. Its goal is to highlight your skills and fit for a particular position.
            </p>
      </div><br>
            <div class="bg-white p-4 rounded shadow-lg">
            <h3 class="fw-bold text-primary mt-4" style="font-size: 2.3rem;">What Have I Learned?</h3>
            <p style="font-size: 1.3rem;">
                A well-crafted CV is very important, especially in today's job market. By tailoring my CV to the specific job I'm applying for, I can highlight the most relevant skills and experiences. For example, in a marketing role, I would focus on my creative skills and campaign successes. In a technical role, I would emphasize my programming skills and technical certifications.
                A tailored CV shows my genuine interest in the role and that I have researched the company. It also helps my CV pass through automated systems by using the right keywords from the job description. By directly addressing the job requirements, I can show why I am the ideal candidate for the position.
            </p>
            <p style="font-size: 1.3rem;">
                The first step in creating a strong CV is creating a header with name and contact details clearly displayed. A compelling aim or summary that simply summarizes job goals and essential skills must come next. Provide a thorough work experience section with a list of previous roles. Include a section on your education that lists your degrees and any relevant courses you've taken. Remember to include a section on skills related to the position. To present a complete picture of your background, lastly think about including areas for certificates, professional associations, and any service projects.
            </p>
            </div><br>
            <div class="bg-white p-4 rounded shadow-lg">
            <h3 class="fw-bold text-primary mt-4" style="font-size: 2.3rem;">Activity</h3>
            <p style="font-size: 1.3rem;">
                We were given a paper to fill in the empty spaces on a CV during the lesson. Then, we got a few advertisements asking us to create good cover letters.
            </p>
            <div class="bg-white p-4 rounded shadow-lg">
            <div class="row gy-4" data-aos="fade-up" data-aos-delay="100">
                <div class="col-lg-6">
                    <img src="assets/img/weekdetails/cv1.jpg" class="img-fluid" alt="CV Image 1">
                </div>
                <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                    <img src="assets/img/weekdetails/cv2.png" class="img-fluid" alt="CV Image 2">
                </div>
            </div>
            </div><br>
            <div class="bg-white p-4 rounded shadow-lg">
            <h3 class="fw-bold text-primary mt-4" style="font-size: 2.3rem;">How to Write My Cover Letter?</h3>
            <p style="font-size: 1.3rem;">
                Begin the cover paragraph by stating the job for which you have applied and the source of the job posting. Next, provide an introduction of your most pertinent experience and abilities, explaining how they meet the job requirements with specific examples. Finally, express how excited you are about the position and the firm, and that you would like to discuss more about how you can contribute to the team.
            </p>
            </div><br>
            <div class="bg-white p-4 rounded shadow-lg">
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
    content: `<section class="container mt-5">
    <h1 class="fw-bold text-primary text-center">Portfolio Management</h1>
        <p class="text-muted text-center">By Miss Ishara Raviharee Weerasinghe</p><br>
    <div class="text-center bg-white p-4 rounded shadow-lg">
        
        <p class="fs-5 text-dark">
            In this lecture, we explored how to create and manage a well-structured portfolio. The discussion covered key areas such as:
        </p>
        <ul class="list-unstyled text-start d-inline-block fs-5">
            <li><i class="bi bi-check-circle-fill text-success"></i> <b>What are the uses of a portfolio?</b></li>
            <li><i class="bi bi-check-circle-fill text-success"></i> <b>Types of portfolios</b></li>
            <li><i class="bi bi-check-circle-fill text-success"></i> <b>How to create portfolios using online sources</b></li>
        </ul>
    </div>

    <div class="mt-5">
        <div class="bg-white p-4 rounded shadow-lg">
            <h3 class="fw-bold text-primary">What Are the Uses of a Portfolio?</h3>
            <p class="fs-5">
                We began by discussing the significance of portfolios and how they contribute to professional and academic growth. Portfolios serve various purposes, including:
            </p>
            <ul class="fs-5">
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
<div class="bg-white p-4 rounded shadow-lg">
            <h3 class="fw-bold text-primary mt-4">Types of Portfolios</h3>
            <p class="fs-5">We then explored different types of portfolios, each serving a unique purpose:</p>

            <p class="fs-5"><b>1. Personal Portfolio</b><br> A collection of creative works, projects, and achievements that highlight skills, talents, and interests.</p>
            <p class="fs-5"><b>2. Career/Dossier Portfolio</b><br> A professional portfolio including resumes, cover letters, references, and documented work experience.</p>
            <p class="fs-5"><b>3. Employment Portfolio</b><br> A detailed collection of work-related accomplishments and skill evidence.</p>
            <p class="fs-5"><b>4. Assessment Portfolio</b><br> Used to track learning progress, showcasing growth and achievements over time.</p>
</div><br>
<div class="bg-white p-4 rounded shadow-lg">
            <div class="row align-items-center mt-4">
                <div class="col-lg-5">
                    <img src="assets/img/weekdetails/portfolio2.jpg" class="img-fluid rounded shadow-lg" alt="Portfolio Image">
                </div>
                <div class="col-lg-7">
                    <h3 class="fw-bold text-primary">Portfolio Management</h3>
                    <p class="fs-5">
                        In portfolio management, we covered three essential areas.
                    </p>
                </div>
            </div>

            <div class="bg-light p-4 rounded mt-5">
                <h3 class="fw-bold text-primary">Creating Portfolios Using Online Platforms</h3>
                <p class="fs-5">
                    Finally, we discussed various online platforms that assist in portfolio creation, including:
                </p>
                <ul class="fs-5">
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
    content: `<section class="container mt-4">
    <h1 class="fw-bold text-primary text-center">Email Etiquette</h1>
    <p class="text-muted text-center">By Miss Ishara Raviharee Weerasinghe</p><br>
    <div class="text-center bg-white p-4 rounded shadow-lg">
        <p class="text-muted fs-5"></p>
        <p class="fs-4 text-dark">
            Today’s professional skills lecture focused on email etiquette. Below are some key takeaways:
        </p>
        <ul class="list-unstyled text-start d-inline-block fs-5">
            <li><i class="bi bi-check-circle-fill text-success"></i> <b>What is etiquette?</b></li>
            <li><i class="bi bi-check-circle-fill text-success"></i> <b>What are the Email Etiquettes?</b></li>
            <li><i class="bi bi-check-circle-fill text-success"></i> <b>Advantages and disadvantages of Emails</b></li>
        </ul>
    </div>

    <div class="mt-4">
        <div class="bg-white p-4 rounded shadow-lg">
            <h4 class="fw-bold text-primary">What is Etiquette?</h4>
            <p class="fs-5">
                Etiquette refers to the set of rules and norms that define appropriate behavior in different situations.
            </p>

            <h4 class="fw-bold text-primary mt-4">Key Email Etiquette Rules</h4>
            <p class="fs-5">Essential guidelines when writing professional emails:</p>
            <ul class="fs-5">
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
<div class="bg-white p-4 rounded shadow-lg">
            <h4 class="fw-bold text-primary mt-4">Advantages & Disadvantages of Emails</h4>
            <p class="fs-5">Emails provide both benefits and challenges.</p>

            <div class="row align-items-center mt-3">
                <div class="col-lg-5">
                    <img src="assets/img/weekdetails/email.jpg" class="img-fluid rounded shadow-lg" alt="Email Image">
                </div>
                <div class="col-lg-7">
                    <h5 class="fw-bold text-primary">Advantages</h5>
                    <ul class="fs-5">
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
                    <ul class="fs-5">
                        <li><i class="bi bi-x-circle-fill text-danger"></i> Miscommunication due to lack of tone/body language</li>
                        <li><i class="bi bi-x-circle-fill text-danger"></i> Information overload – managing too many emails</li>
                        <li><i class="bi bi-x-circle-fill text-danger"></i> Security risks (phishing, spam, hacking threats)</li>
                        <li><i class="bi bi-x-circle-fill text-danger"></i> Can be time-consuming</li>
                    </ul>
                </div>
                <div class="col-lg-5">
                    <img src="assets/img/weekdetails/EMAIL2.jpg" class="img-fluid rounded shadow-lg" alt="Email Risks">
                </div>
            </div>

            <div class="bg-light p-4 rounded mt-4">
                <h4 class="fw-bold text-primary">Professional Email Etiquette</h4>
                <p class="fs-5">Follow these best practices for effective emails:</p>
                <ul class="fs-5">
                    <li><i class="bi bi-check-circle-fill text-success"></i> Use a clear subject line</li>
                    <li><i class="bi bi-check-circle-fill text-success"></i> Start with a proper greeting</li>
                    <li><i class="bi bi-check-circle-fill text-success"></i> Be concise and to the point</li>
                    <li><i class="bi bi-check-circle-fill text-success"></i> Maintain a professional tone</li>
                    <li><i class="bi bi-check-circle-fill text-success"></i> End with a proper sign-off</li>
                </ul>
            </div>

            <p class="fs-5 mt-3">
                Following these email etiquette guidelines ensures clear and professional communication in both academic and business settings.
            </p>
        </div>
    </div>
</section>

`,
  },
];

const BlogDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const blogPost = blogPosts.find(post => post.id.toString() === id);

  if (!blogPost) {
    return <p>Post not found!</p>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="blog-post">
          <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
              
    

          </div>
        </div>
        </div>
        </div>
    
  );
};

export default BlogDetails;
