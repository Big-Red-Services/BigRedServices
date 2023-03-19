import Card from "../components/Card";
import Filter from "../components/Filter";
import Navbar from "../components/Navbar";

export default function HomePage() {
    return (
    <div className="bg-base-300 text-base-content">
        <Navbar/>
        <div className="flex">
            <div className="mr-5">
            <Filter/>
            </div>
            <div>
                <article className="prose">
                    <h3 className="text-4xl px-5 pt-5 text-left mb-5">All Job Postings</h3>
                </article>
                <Card title='IOS Developer' time='15' comp = '20' info = 'I need someone who knows how to build a full-stack iOS app from scratch. We have hi-fidelity wireframes and need a developer.'/>
                <Card title='Full Stack Developer' time='30' comp = '15' info = 'We are building a website that seeks to connect entrepreneurships with developers. We need an expert in HTML/CSS, Flask, and JavaScript.'/>
                <Card title='Python Programmer' time='20' comp = '5' info = 'I have a spreadsheet of 1000+ data points that I need cleaned up and analyzed by someone who knows Python.'/>
                <Card title='test tester testy' time='0' comp = '0' info = 'test'/>
                <Card title='test tester testy' time='0' comp = '0' info = 'test testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttestt esttesttesttesttesttesttesttestte sttesttesttesttesttesttesttesttesttesttesttesttesttesttes esttesttesttesttesttesttesttestte  esttesttesttesttesttesttesttestte  esttesttesttesttesttesttesttestte  esttesttesttesttesttesttesttestte  esttesttesttesttesttesttesttestte  esttesttesttesttesttesttesttestte  esttesttesttesttesttesttesttestte  esttesttesttesttesttesttesttestte v '/>
                <Card title='Full Stack Developer' time='30' comp = '15' info = 'We are building a website that seeks to connect entrepreneurships with developers. We need an expert in HTML/CSS, Flask, and JavaScript.'/>
                <Card title='Python Programmer' time='20' comp = '5' info = 'I have a spreadsheet of 1000+ data points that I need cleaned up and analyzed by someone who knows Python.'/>
                <Card title='IOS Developer' time='15' comp = '20' info = 'I need someone who knows how to build a full-stack iOS app from scratch. We have hi-fidelity wireframes and need a developer.'/>
                <Card title='Full Stack Developer' time='30' comp = '15' info = 'We are building a website that seeks to connect entrepreneurships with developers. We need an expert in HTML/CSS, Flask, and JavaScript.'/>
                <Card title='Python Programmer' time='20' comp = '5' info = 'I have a spreadsheet of 1000+ data points that I need cleaned up and analyzed by someone who knows Python.'/>
            </div>
        </div>
    </div>
    );
}