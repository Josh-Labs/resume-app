import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ResumeWebsite() {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-10">
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Joshua Murphy</h1>
        <p className="text-lg">Senior DevOps Engineer | Kubernetes | Terraform | CI/CD | Cloud Platforms</p>
      </header>

      <Card className="rounded-2xl shadow-md">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Professional Summary</h2>
          <p>
            Creative and adaptable Senior DevOps Engineer with 5+ years of experience designing, deploying, and maintaining scalable infrastructure solutions. Specializing in Kubernetes, Terraform, CI/CD pipelines, and cloud platforms including AWS and GCP. Known for integrating AI/ML infrastructure and promoting automation to drive efficiency.
          </p>
        </CardContent>
      </Card>

      <Card className="rounded-2xl shadow-md">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Technical Skills</h2>
          <ul className="list-disc list-inside">
            <li>Kubernetes, Docker, Nomad</li>
            <li>Terraform, Ansible, Packer</li>
            <li>CI/CD with GitHub Actions, Jenkins</li>
            <li>AWS, GCP, Azure</li>
            <li>Python, Go, Shell, PowerShell</li>
            <li>Linux, Windows, macOS System Administration</li>
            <li>Monitoring & Telemetry Tools</li>
            <li>Networking: DNS, Switching, Routing</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="rounded-2xl shadow-md">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Certifications</h2>
          <ul className="list-disc list-inside">
            <li>Certified Kubernetes Administrator (CKA) - In Progress</li>
            <li>Terraform Associate - In Progress</li>
            <li>AWS DevOps Engineer – Professional - Planned</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="rounded-2xl shadow-md">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <ul className="list-disc list-inside">
            <li>Deployed a real-time telemetry platform on Kubernetes using Prometheus and Grafana.</li>
            <li>Automated cloud infrastructure provisioning using Terraform and Ansible for a national retailer.</li>
            <li>Built a CI/CD pipeline with GitHub Actions and Argo CD for a machine learning application on AWS EKS.</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="rounded-2xl shadow-md">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p>Email: joshua.murphy@example.com</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/joshua-murphy-b60474131" className="text-blue-600 underline">linkedin.com/in/joshua-murphy-b60474131</a></p>
          <Button className="mt-4">Download Resume</Button>
        </CardContent>
      </Card>
    </div>
  );
}
