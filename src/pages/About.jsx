const About = () => {
    return (
        <section id="about_section">
            <h1 style={{ fontSize: '5rem', marginTop: '1rem', lineHeight: '5rem' }}>About Jobhive</h1>
            <p>
                <strong>JobHive</strong> is a sleek and responsive Single Page Application (SPA) built to simplify the job search experience for modern professionals.
                <br />Whether you're a seasoned expert or just starting your career journey,
                <br /><strong>JobHive</strong> offers a streamlined interface to explore, filter, and engage with job opportunities across diverse industries.
                <br />We believe that finding the right job shouldn't feel like a maze.
                <br />That's why <strong>JobHive</strong> combines intuitive design with powerful search and filter tools, making it easier than ever to discover roles that match your skills, goals, and lifestyle.
            </p>
            <h3 style={{ fontSize: '3rem' }}>What Makes JobHive Different?</h3>
            <p>
                <ul className="about-list">
                    <li>Categorized Listings: Browse jobs by industry — from IT & Software to Healthcare and Government.</li>
                    <li>Smart Search & Filters: Refine your results by keyword, company, location, experience level, and more.</li>
                    <li>Detailed Job Views: Dive into full job descriptions, company insights, qualifications, and perks.</li>
                    <li>Visual Application Flow: While applications are UI-only, the experience mimics real-world job portals.</li>
                    <li>Save & Bookmark: Keep track of interesting roles with our “Saved Jobs” feature (UI only).</li>
                    <li>Feedback & Contact: Share your thoughts, rate the platform, or reach out via our contact section.</li>
                </ul>
            </p>
            <h2 style={{ fontSize: '4rem' }}>Our Mission</h2>
            <p>
                To empower job seekers with a fast, user-friendly platform that makes career discovery feel less like a chore and more like an opportunity.
                <br /><strong>JobHive</strong> is built with simplicity, accessibility, and responsiveness at its core — ensuring a seamless experience across devices.
                <br />Whether you're hunting for your next big break or just browsing what's out there, <strong>JobHive</strong> is your hive of opportunity.
            </p>
        </section>
    )
}

export default About