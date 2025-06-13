import bcrypt from "bcryptjs";
import pool from "../config/postgres.js";
import { initializeDatabase } from "../config/postgres.js";

async function seedDatabase() {
  console.log("Starting database seeding...");

  const client = await pool.connect();

  try {
    // First initialize database structure
    await initializeDatabase();

    // Check if admin user already exists
    const existingAdmin = await client.query(
      "SELECT id FROM admin_users WHERE username = 'admin'",
    );

    if (existingAdmin.rows.length === 0) {
      // Create default admin user
      const passwordHash = await bcrypt.hash("admin123", 12);

      await client.query(
        `INSERT INTO admin_users (username, password_hash, email, full_name, role)
         VALUES ($1, $2, $3, $4, $5)`,
        [
          "admin",
          passwordHash,
          "admin@technumopus.com",
          "System Administrator",
          "super_admin",
        ],
      );

      console.log("✅ Default admin user created");
      console.log("   Username: admin");
      console.log("   Password: admin123");
      console.log("   Email: admin@technumopus.com");
    } else {
      console.log("ℹ️  Admin user already exists");
    }

    // Check if sample data exists
    const existingJobs = await client.query("SELECT COUNT(*) FROM jobs");
    const jobCount = parseInt(existingJobs.rows[0].count);

    if (jobCount === 0) {
      // Insert sample jobs
      const sampleJobs = [
        {
          title: "Senior Full Stack Developer",
          department: "Engineering",
          location: "Remote",
          type: "Full-time",
          level: "Senior",
          description:
            "We're looking for a Senior Full Stack Developer to join our growing engineering team. You'll be responsible for developing scalable web applications using modern technologies.",
          requirements: [
            "5+ years of experience in full-stack development",
            "Proficiency in React, Node.js, and TypeScript",
            "Experience with cloud platforms (AWS, Azure, or GCP)",
            "Strong understanding of database design and optimization",
            "Experience with microservices architecture",
          ],
          benefits: [
            "Competitive salary and equity",
            "Health, dental, and vision insurance",
            "Flexible remote work options",
            "Professional development budget",
            "25 days PTO + holidays",
          ],
          salary: "$120,000 - $150,000",
          status: "active",
        },
        {
          title: "DevOps Engineer",
          department: "Engineering",
          location: "New York, NY",
          type: "Full-time",
          level: "Mid-level",
          description:
            "Join our DevOps team to help scale our infrastructure and improve our deployment processes. You'll work with cutting-edge technologies in a fast-paced environment.",
          requirements: [
            "3+ years of DevOps experience",
            "Experience with Kubernetes and Docker",
            "Proficiency in CI/CD pipelines",
            "Knowledge of infrastructure as code (Terraform, CloudFormation)",
            "Experience with monitoring and logging tools",
          ],
          benefits: [
            "Competitive salary",
            "401k matching",
            "Health insurance",
            "Learning and development budget",
            "Flexible work hours",
          ],
          salary: "$100,000 - $130,000",
          status: "active",
        },
        {
          title: "Product Manager",
          department: "Product",
          location: "San Francisco, CA",
          type: "Full-time",
          level: "Senior",
          description:
            "We're seeking a Senior Product Manager to drive our product strategy and work closely with engineering and design teams to deliver exceptional user experiences.",
          requirements: [
            "5+ years of product management experience",
            "Experience with B2B SaaS products",
            "Strong analytical and problem-solving skills",
            "Excellent communication and leadership abilities",
            "Experience with Agile development methodologies",
          ],
          benefits: [
            "Competitive salary and equity",
            "Health and wellness benefits",
            "Flexible PTO policy",
            "Professional development opportunities",
            "Stock options",
          ],
          salary: "$140,000 - $170,000",
          status: "active",
        },
      ];

      for (const job of sampleJobs) {
        await client.query(
          `INSERT INTO jobs (title, department, location, type, level, description, requirements, benefits, salary, status, created_by)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
          [
            job.title,
            job.department,
            job.location,
            job.type,
            job.level,
            job.description,
            job.requirements,
            job.benefits,
            job.salary,
            job.status,
            1, // admin user ID
          ],
        );
      }

      console.log("✅ Sample jobs created");
    }

    // Check if sample team members exist
    const existingMembers = await client.query(
      "SELECT COUNT(*) FROM team_members",
    );
    const memberCount = parseInt(existingMembers.rows[0].count);

    if (memberCount === 0) {
      // Insert sample team members
      const sampleMembers = [
        {
          name: "Sarah Johnson",
          position: "Chief Technology Officer",
          department: "Leadership",
          email: "sarah@technumopus.com",
          phone: "+1 (555) 123-4567",
          bio: "Sarah leads our technical vision with over 15 years of experience in software architecture and team leadership. She's passionate about building scalable systems and mentoring the next generation of engineers.",
          skills: [
            "Leadership",
            "Software Architecture",
            "Cloud Computing",
            "Team Management",
            "Strategic Planning",
          ],
          image_url:
            "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400",
          linkedin_url: "https://linkedin.com/in/sarahjohnson",
          twitter_url: "https://twitter.com/sarahjohnson",
          status: "active",
          join_date: "2022-01-15",
        },
        {
          name: "Michael Chen",
          position: "Senior Full Stack Developer",
          department: "Engineering",
          email: "michael@technumopus.com",
          phone: "+1 (555) 234-5678",
          bio: "Michael is a passionate developer with expertise in modern web technologies and scalable systems. He enjoys solving complex problems and contributing to open-source projects.",
          skills: ["React", "Node.js", "Python", "AWS", "Docker"],
          image_url:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
          linkedin_url: "https://linkedin.com/in/michaelchen",
          twitter_url: "https://twitter.com/michaelchen",
          status: "active",
          join_date: "2022-03-10",
        },
        {
          name: "Emily Rodriguez",
          position: "Product Designer",
          department: "Design",
          email: "emily@technumopus.com",
          phone: "+1 (555) 345-6789",
          bio: "Emily brings creativity and user-centered design thinking to our products. With a background in both UX and visual design, she ensures our solutions are both beautiful and functional.",
          skills: [
            "UX Design",
            "UI Design",
            "Figma",
            "User Research",
            "Prototyping",
          ],
          image_url:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
          linkedin_url: "https://linkedin.com/in/emilyrodriguez",
          twitter_url: "https://twitter.com/emilyrodriguez",
          status: "active",
          join_date: "2022-05-20",
        },
      ];

      for (const member of sampleMembers) {
        await client.query(
          `INSERT INTO team_members (name, position, department, email, phone, bio, skills, image_url, linkedin_url, twitter_url, status, join_date, created_by)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`,
          [
            member.name,
            member.position,
            member.department,
            member.email,
            member.phone,
            member.bio,
            member.skills,
            member.image_url,
            member.linkedin_url,
            member.twitter_url,
            member.status,
            member.join_date,
            1, // admin user ID
          ],
        );
      }

      console.log("✅ Sample team members created");
    }

    // Check if sample submissions exist
    const existingSubmissions = await client.query(
      "SELECT COUNT(*) FROM contact_submissions",
    );
    const submissionCount = parseInt(existingSubmissions.rows[0].count);

    if (submissionCount === 0) {
      // Insert sample contact submissions
      const sampleSubmissions = [
        {
          type: "contact",
          name: "John Doe",
          email: "john.doe@example.com",
          company: "TechCorp Inc.",
          phone: "+1 (555) 987-6543",
          category: "SaaS Development",
          message:
            "We're looking for a custom SaaS solution for our inventory management. We need scalable architecture and modern UI/UX design. Our current system can't handle our growing customer base.",
          status: "new",
        },
        {
          type: "consultation",
          name: "Sarah Wilson",
          email: "sarah@startup.com",
          company: "StartupXYZ",
          phone: "+1 (555) 876-5432",
          project_type: "Cloud Migration",
          budget: "$50K - $100K",
          timeline: "3-6 months",
          preferred_date: "2024-02-15",
          preferred_time: "2:00 PM - 3:00 PM",
          message:
            "We need help migrating our legacy systems to AWS. Currently running on-premise servers with about 50TB of data. Looking for a comprehensive migration strategy.",
          status: "read",
        },
        {
          type: "contact",
          name: "Michael Kumar",
          email: "m.kumar@enterprise.com",
          company: "Enterprise Solutions Ltd.",
          phone: "+1 (555) 765-4321",
          category: "SAP Consulting",
          message:
            "Looking for SAP implementation services for our manufacturing unit. We have about 500 employees and multiple locations across the country.",
          status: "responded",
        },
      ];

      for (const submission of sampleSubmissions) {
        await client.query(
          `INSERT INTO contact_submissions (type, name, email, company, phone, category, project_type, budget, timeline, preferred_date, preferred_time, message, status)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`,
          [
            submission.type,
            submission.name,
            submission.email,
            submission.company,
            submission.phone,
            submission.category || null,
            submission.project_type || null,
            submission.budget || null,
            submission.timeline || null,
            submission.preferred_date || null,
            submission.preferred_time || null,
            submission.message,
            submission.status,
          ],
        );
      }

      console.log("✅ Sample contact submissions created");
    }

    console.log("\n🎉 Database seeding completed successfully!");
    console.log("\n📝 You can now:");
    console.log("   • Log into the admin panel with admin/admin123");
    console.log("   • View sample jobs, team members, and submissions");
    console.log("   • Start managing your website content");
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    throw error;
  } finally {
    client.release();
    await pool.end();
  }
}

// Run seeding if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  seedDatabase()
    .then(() => {
      console.log("Seeding completed");
      process.exit(0);
    })
    .catch((error) => {
      console.error("Seeding failed:", error);
      process.exit(1);
    });
}

export default seedDatabase;
