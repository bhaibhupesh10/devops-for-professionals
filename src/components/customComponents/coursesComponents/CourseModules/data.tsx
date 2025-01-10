import { Module } from './types'

export const modules: Module[] = [
  {
    "id": 1,
    "title": "Module 1",
    "subtitle": "Introduction to DevOps",
    "topics": [
      {
        "id": 1,  
        "title": "Overview of DevOps",
        "content": [
          "Understanding the DevOps culture and its significance in modern software development.",
          "Benefits of DevOps: Enhanced collaboration, faster deployment, and improved quality.",
          "DevOps lifecycle: Plan, Develop, Build, Test, Release, Deploy, Operate, Monitor."
        ]
      },
      {
        "id": 2,
        "title": "DevOps Principles",
        "content": [
          "Continuous Integration (CI) and Continuous Deployment (CD).",
          "Infrastructure as Code (IaC).",
          "Monitoring and Logging.",
          "Collaboration and Communication."
        ]
      }
    ]
  },
  {
    "id": 2,
    "title": "Module 2",
    "subtitle": "Git & Github",
    "topics": [
      {
        "id": 1,
        "title": "Advanced Git Concepts",
        "content": [
          "Git Internals: Explore how Git represents commits and branches internally to gain deep insights into its operations.",
          "Rewriting History: Learn advanced commands and scenarios, like rewriting history with interactive rebase, to maintain a clean project history.",
          "Git Hooks: Automate tasks and enforce policies by utilizing Git hooks effectively."
        ]
      },
      {
        "id": 2,
        "title": "Branching and Merging Strategies",
        "content": [
          "Branching Models: Understand and implement effective branching strategies to streamline development workflows.",
          "Merging vs. Rebasing: Master the art of merging and rebasing to integrate changes efficiently.",
          "Conflict Resolution: Develop skills to resolve merge conflicts and maintain code integrity."
        ]
      },
      {
        "id": 3,
        "title": "Repository Management and Collaboration",
        "content": [
          "Forking and Pull Requests: Collaborate efficiently by forking repositories and managing pull requests.",
          "Managing Private Repositories: Handle private repositories and control access permissions effectively.",
          "Tagging and Releases: Use tags and releases to manage versions and track project milestones."
        ]
      },
      {
        "id": 4,
        "title": "Advanced Git Commands and Techniques",
        "content": [
          "Git Rebase and Reset: Utilize advanced commands like rebase and reset to manipulate commit history.",
          "Git Stash: Temporarily save changes with Git stash to manage work in progress.",
          "Git Submodules: Manage submodules to handle dependencies within your projects."
        ]
      },
      {
        "id": 5,
        "title": "Best Practices and Advanced Workflows",
        "content": [
          "Code Review Processes: Establish effective code review workflows to maintain code quality.",
          "Security Practices: Implement security measures in Git workflows to protect codebases.",
          "Performance Optimization: Optimize Git operations for large repositories and teams."
        ]
      }
    ]
  },
  {
    "id": 3,
    "title": "Module 3",
    "subtitle": "DCA - Docker Certified Associate",
    "topics": [
      {
        "id": 1,
        "title": "Introduction to Docker and Containerization",
        "content": [
          "Understanding Containers and Virtualization.",
          "Explore the differences between containers and virtual machines.",
          "Discuss the benefits of containerization in modern application development."
        ]
      },
      {
        "id": 2,
        "title": "Overview of Docker",
        "content": [
          "Introduction to Docker's role in the containerization ecosystem.",
          "Key components: Docker Engine, Docker Hub, and Docker Compose."
        ]
      },
      {
        "id": 3,
        "title": "Setting Up the Docker Environment",
        "content": [
          "Installation of Docker on Linux operating systems.",
          
        ]
      },
      {
        "id": 4,
        "title": "Docker Fundamentals",
        "content": [
          "Docker Architecture.",
          "Understanding Docker's client-server model.",
          "Role of Docker Daemon and Docker CLI."
        ]
      },
      {
        "id": 5,
        "title": "Working with Docker Images and Containers",
        "content": [
          "Creating and managing Docker images.",
          "Running, stopping, and removing containers.",
          "Understanding container lifecycles."
        ]
      },
      {
        "id": 6,
        "title": "Docker Networking",
        "content": [
          "Configuring container networking.",
          "Exploring bridge, host, and overlay networks."
        ]
      },
      {
        "id": 7,
        "title": "Data Management in Docker",
        "content": [
          "Using volumes for persistent storage.",
          "Managing data in containers."
        ]
      },
      {
        "id": 8,
        "title": "Advanced Docker Usage",
        "content": [
          "Docker Compose.",
          "Defining multi-container applications.",
          "Using docker-compose.yml files for configuration."
        ]
      },
      {
        "id": 9,
        "title": "Docker Swarm and Orchestration",
        "content": [
          "Introduction to Docker Swarm mode.",
          "Deploying and managing services in a Swarm cluster.",
          "Comparing Docker Swarm with Kubernetes."
        ]
      },
      {
        "id": 10,
        "title": "Security Best Practices",
        "content": [
          "Securing Docker containers and images.",
          "Implementing user namespaces and security profiles."
        ]
      },
      {
        "id": 11,
        "title": "Advanced Topics and Best Practices",
        "content": [
          "Docker in Production Environments.",
          "Strategies for deploying Docker containers at scale.",
          "Ensuring high availability and fault tolerance."
        ]
      },
      {
        "id": 12,
        "title": "Performance Optimization",
        "content": [
          "Optimizing Docker images for faster builds and deployments.",
          "Resource management and limiting container resource usage."
        ]
      },
      {
        "id": 13,
        "title": "Troubleshooting and Debugging",
        "content": [
          "Common issues in Docker environments and their resolutions.",
          "Using Docker logs and debugging tools effectively."
        ]
      }
    ]
  },
  {
    "id": 4,
    "title": "Module 4",
    "subtitle": "Kubernetes",
    "topics": [
      {
        "id": 7,
        "title": "Lab Setup",
        "content": [
          "Setting up a Minikube cluster for Kubernetes practice."
        ]
      },
      {
        "id": 8,
        "title": "Introduction to Kubernetes",
        "content": [
          "Understanding Kubernetes and its components."
        ]
      },
      {
        "id": 9,
        "title": "Working with Pods",
        "content": [
          "What is a pod and how to create one using the command line and YAML file.",
          "Interacting with Kubernetes clusters and deleting all pods."
        ]
      },
      {
        "id": 10,
        "title": "Labels & Load Balancers",
        "content": [
          "Working with labels and selectors to organize resources.",
          "Understanding Replication Controllers, Replica Sets, and scaling pods.",
          "Configuring load balancers and creating Replica Sets."
        ]
      },
      {
        "id": 11,
        "title": "Environmental Variables",
        "content": [
          "What are environmental variables in Kubernetes?",
          "Creating and managing environmental variables for pods."
        ]
      },
      {
        "id": 12,
        "title": "Storage Management",
        "content": [
          "Different types of storage in Kubernetes: Persistent Volumes (PV), Persistent Volume Claims (PVC), and Storage Classes (SC).",
          "Creating and using PVC and PV.",
          "Dynamic provisioning and using NFS in Storage Classes for persistent data."
        ]
      },
      {
        "id": 13,
        "title": "Deployments",
        "content": [
          "What are Kubernetes deployments and different deployment strategies?",
          "Understanding Rollout and Rollback strategies, including Recreate and Rolling Update.",
          "Deploying Pods using deployment strategies."
        ]
      },
      {
        "id": 14,
        "title": "Secrets and Config Management",
        "content": [
          "Understanding Secrets in Kubernetes: How to use and manage secrets securely.",
          "Introduction to Kustomize for managing multi-container pods (e.g., WordPress & MariaDB).",
          "Creating and managing ConfigMaps for configuration management."
        ]
      },
      {
        "id": 15,
        "title": "Namespaces",
        "content": [
          "Understanding and creating Kubernetes namespaces.",
          "Managing resources within specific namespaces.",
          "Authentication in Kubernetes and managing user access"
        ]
      },
      {
        "id": 16,
        "title": "Authentication & API Server",
        "content": [
          "Understanding the Kubernetes API server and authentication mechanisms.",
          "Managing Kubernetes contexts, config files, and key types.",
          "Role-based Access Control (RBAC) for secure access management.",
          "Practical on creating a Red Hat Enterprise Linux (RHEL-9) client for Kubernetes."
        ]
      },
      {
        "id": 17,
        "title": "Networking",
        "content": [
          "Understanding Ingress Controllers and path-based routing.",
          "Setting up local DNS and network policies for controlling pod communication.",
          "Filtering network packets and managing source/destination ports."
        ]
      },
      {
        "id": 18,
        "title": "Design Patterns and Logs",
        "content": [
          "Exploring design patterns for pods, including sidecar and ambassador patterns.",
          "Log management in Kubernetes: Viewing and managing logs in Apache Web Server.",
          "Changing log formats and handling logging in Kubernetes environments."
        ]
      },
      {
        "id": 19,
        "title": "Container Security",
        "content": [
          "Understanding user roles (general user vs root user) and pod capabilities.",
          "Securing containers: Managing capabilities, service accounts, and using tokens.",
          
        ]
      },
      {
        "id": 20,
        "title": "Custom Resources & CRDs",
        "content": [
          "Introduction to Custom Resources (CR) and Custom Resource Definitions (CRD).",
          "Creating and managing custom resources in Kubernetes."
        ]
      }
    ]
  },
  {
    "id": 5,
    "title": "Module 5",
    "subtitle": "CI/CD with Jenkins",
    "topics": [
      {
        "id": 21,
        "title": "Introduction to Jenkins and Continuous Integration/Continuous Deployment (CI/CD)",
        "content": [
          "Overview of Software Development Processes",
          "Understanding traditional development workflows.",
          "Challenges in manual integration and deployment."
        ]
      },
      {
        "id": 22,
        "title": "Introduction to Jenkins",
        "content": [
          "History and evolution of Jenkins.",
          "Key features and capabilities.",
          "Jenkins ecosystem and community support."
        ]
      },
      {
        "id": 23,
        "title": "Fundamentals of CI/CD",
        "content": [
          "Defining Continuous Integration, Continuous Delivery, and Continuous Deployment.",
          "Benefits of implementing CI/CD pipelines.",
          "Role of Jenkins in automating CI/CD processes."
        ]
      },
      {
        "id": 24,
        "title": "Setting Up Jenkins",
        "content": [
          "Installation and Configuration",
          "Installing Jenkins on various operating systems.",
          "Configuring Jenkins for optimal performance.",
          "Understanding Jenkins architecture: Master and Agent nodes."
        ]
      },
      {
        "id": 25,
        "title": "Managing Jenkins",
        "content": [
          "Navigating the Jenkins dashboard.",
          "Configuring system settings and global tools.",
          "Managing plugins to extend Jenkins functionality."
        ]
      },
      {
        "id": 26,
        "title": "Building and Managing Jenkins Pipelines",
        "content": [
          "Creating and Configuring Pipelines",
          "Understanding Declarative and Scripted Pipelines.",
          "Defining stages, steps, and agents within a pipeline."
        ]
      },
      {
        "id": 27,
        "title": "Version Control Integration",
        "content": [
          "Integrating Jenkins with Git repositories.",
          "Setting up webhooks for automated builds.",
          "Managing credentials securely."
        ]
      },
      {
        "id": 28,
        "title": "Automated Testing and Quality Assurance",
        "content": [
          "Integrating unit tests and code quality tools.",
          "Configuring test reports and notifications.",
          "Implementing code coverage analysis."
        ]
      },
      {
        "id": 29,
        "title": "Advanced Jenkins Features", 
        "content": [
          "Distributed Builds",
          "Setting up and managing Jenkins agents.",
          "Configuring build executors for parallel processing.",
     
        ]
      },
      {
        "id": 30,
        "title": "Pipeline as Code",
        "content": [
          "Storing pipeline definitions in version control.",
          "Implementing shared libraries for reusable pipeline code.",
          "Managing pipeline configurations with configuration as code."
        ]
      },
      {
        "id": 31,
        "title": "Security and Access Control",
        "content": [
          "Configuring user authentication and authorization.",
          "Implementing role-based access control (RBAC).",
          
        ]
      },
      {
        "id": 32,
        "title": "Best Practices and Troubleshooting",
        "content": [
          "Optimizing Jenkins Performance",
          "Configuring build queues and executors efficiently.",
          "Managing build artifacts and workspace cleanup.",
          "Scaling Jenkins for large teams and projects."
        ]
      },
     
    ]
  },
  {
    "id": 6,
    "title": "Module 6",
    "subtitle": "Prometheus & Grafana",
    "topics": [
      
      {
        "id": 36,
        "title": "Prometheus Overview",
        "content": [
          "Architecture and components of Prometheus.",
          "Prometheus data model and metric types.",
          "Setting up and configuring Prometheus."
        ]
      },
      {
        "id": 37,
        "title": "Grafana Overview",
        "content": [
          "Introduction to Grafana and its capabilities.",
          "Integrating Grafana with Prometheus.",
          "Creating and managing dashboards."
        ]
      },
      {
        "id": 38,
        "title": "Monitoring Web Applications",
        "content": [
          "Instrumenting applications for monitoring.",
          "Using client libraries for metric collection.",
          "Setting up exporters for various services."
        ]
      },
      {
        "id": 39,
        "title": "Alerting Mechanisms",
        "content": [
          "Configuring alerting rules in Prometheus.",
          "Integrating alerting with Grafana.",
          "Best practices for effective alerting."
        ]
      },
      {
        "id": 40,
        "title": "Prometheus Storage and Scaling",
        "content": [
          "Understanding Prometheus storage architecture.",
          "Scaling Prometheus for large environments.",
          "Integrating Prometheus with remote storage systems."
        ]
      },
      {
        "id": 41,
        "title": "Advanced Grafana Features",
        "content": [
          "Using variables and templating in dashboards.",
          "Implementing annotations and dashboard links.",
          "Configuring user authentication and permissions."
        ]
      },
      {
        "id": 42,
        "title": "Provisioning and Automation",
        "content": [
          "Automating Grafana dashboards and data sources.",
          "Using Grafana provisioning for consistent configurations.",
          "Version control for dashboards and alerts."
        ]
      },
      {
        "id": 43,
        "title": "Security Considerations",
        "content": [
          "Securing Prometheus and Grafana instances.",
          "Implementing role-based access control (RBAC).",
          "Best practices for data protection and compliance."
        ]
      }
    ]
  },
  {
    "id": 7,
    "title": "Module 7",
    "subtitle": "Ansible",
    "topics": [
      {
        "id": 44,
        "title": "Introduction to Ansible",
        "content": [
          "What is Ansible?",
          "Overview of Ansible and its role in IT automation.",
          "Benefits of using Ansible in DevOps."
        ]
      },
      {
        "id": 45,
        "title": "Key Features",
        "content": [
          "Agentless architecture (SSH-based).",
          "Idempotency in task execution.",
          "Extensibility through custom modules and plugins."
        ]
      },
      {
        "id": 46,
        "title": "Core Components of Ansible",
        "content": [
          "Playbooks: Writing YAML-based automation scripts.",
          "Modules: Overview of built-in modules for managing systems and configurations.",
          "Inventory: Defining static and dynamic inventories for managed nodes.",
          "Roles: Creating reusable and modular Ansible tasks for large projects."
        ]
      },
      {
        "id": 47,
        "title": "Ansible in DevOps Workflows",
        "content": [
          "Continuous Integration/Continuous Deployment (CI/CD):",
          "Integrating Ansible with Jenkins, GitLab, or GitHub Actions for automated testing and deployment.",
          "Infrastructure as Code (IaC): Automating infrastructure provisioning with Ansible.",
          "Configuration Management: Standardizing configurations across environments."
        ]
      },
      {
        "id": 48,
        "title": "Ansible Best Practices",
        "content": [
          "Version Control: Storing playbooks and roles in Git for collaboration and tracking changes.",
          "Modularization: Breaking down tasks into reusable roles and collections.",
          "Security in Automation: Protecting sensitive data with Ansible Vault."
        ]
      },
      {
        "id": 49,
        "title": "Practical Projects",
        "content": [
          "Automate web server deployment with Ansible.",
          "Configure and deploy a multi-tier application using Ansible and Docker.",
          "Integrate Ansible in a CI/CD pipeline for automated testing and deployment.",
          "Deploy and scale Kubernetes applications using Ansible and Helm."
        ]
      }
    ]
  },
  {
    "id": 8,
    "title": "Module 8",
    "subtitle": "Terraform",
    "topics": [
      {
        "id": 50,
        "title": "Introduction to Terraform",
        "content": [
          "What is Terraform?",
          "Overview of Infrastructure as Code (IaC).",
          "Benefits of using Terraform for DevOps.",
          "Comparing Terraform with other IaC tools (e.g., CloudFormation, Ansible)."
        ]
      },
      {
        "id": 51,
        "title": "Core Concepts",
        "content": [
          "Providers, resources, state files, and configuration files.",
          "Declarative syntax and its advantages."
        ]
      },
      {
        "id": 52,
        "title": "Setting Up Terraform",
        "content": [
          "Installing Terraform: Installing on Windows, macOS, and Linux.",
          "Understanding Providers: Overview of Terraform providers (AWS, Azure, Google Cloud, Kubernetes).",
          "Authenticating and configuring cloud providers."
        ]
      },
      {
        "id": 53,
        "title": "Working with Terraform Configurations",
        "content": [
          "Basic Configurations: Writing and organizing Terraform .tf files.",
          "Defining resources and variables.",
          "Variables and Outputs: Using input variables for dynamic configurations.",
          "Outputs for sharing data between configurations."
        ]
      },
      {
        "id": 54,
        "title": "State Management",
        "content": [
          "Managing Terraform state files.",
          "Remote state storage (AWS S3, Azure Blob, Google Cloud Storage)."
        ]
      },
      {
        "id": 55,
        "title": "Infrastructure Automation in Practice",
        "content": [
          "Building Cloud Infrastructure: Provisioning virtual machines, networks, and storage on AWS, Azure, and GCP.",
          "Creating scalable and fault-tolerant architectures.",
          "Networking with Terraform: Automating VPCs, subnets, and security groups.",
          "Configuring load balancers and DNS records.",
          "Terraform and Containers: Deploying Docker containers.",
          "Integrating Terraform with Kubernetes for infrastructure provisioning."
        ]
      },
      {
        "id": 56,
        "title": "Advanced Terraform Features",
        "content": [
          "Modules: Creating reusable modules for scalable configurations.",
          "Using Terraform Registry for pre-built modules.",
          "Terraform Workspaces: Managing multiple environments (e.g., dev, staging, production).",
          "Dynamic Blocks: Writing flexible configurations with loops and conditionals.",
          "Data Sources: Fetching data from existing infrastructure for dynamic resources."
        ]
      },
      {
        "id": 57,
        "title": "Collaboration and Team Workflow",
        "content": [
          "Terraform Cloud: Overview of Terraform Cloud and its role in team collaboration.",
          "Setting up remote operations and managing workspaces.",
          "Version Control Integration: Using Git for Terraform configuration management.",
          "Applying CI/CD workflows for infrastructure changes.",
          "Managing State in Teams: Locking state files to prevent conflicts.",
          "Sharing state securely across team members."
        ]
      },
      {
        "id": 58,
        "title": "Security and Best Practices",
        "content": [
          "Securing Terraform Configurations: Managing secrets with HashiCorp Vault and environment variables.",
          "Enforcing security policies with Sentinel.",
          "Best Practices: Structuring Terraform code for maintainability.",
          
        ]
      }
    ]
  },
  {
    "id": 9,
    "title": "Module 9",
    "subtitle": "Linux",
    "topics": [
      {
        "id": 59,
        "title": "Introduction to Linux for DevOps",
        "content": [
          "Why Linux for DevOps?",
          "Overview of Linux in cloud, automation, and containerized environments.",
          "Key distributions used in the industry (Ubuntu, CentOS, RHEL)."
        ]
      },
      {
        "id": 60,
        "title": "Linux Architecture and Command Line Basics",
        "content": [
          "Linux kernel, shell, and file system hierarchy.",
          "Essential CLI commands for navigation and file management."
        ]
      },
      {
        "id": 61,
        "title": "User and Permission Management",
        "content": [
          "User and Group Management: Adding, modifying, and deleting users and groups.",
          "Understanding /etc/passwd, /etc/group, and /etc/shadow.",
          "Permissions and Ownership: File and directory permissions (read, write, execute).",
          "Managing ownership with chown and permissions with chmod.",
          "Access Control Lists (ACLs) for advanced permission management."
        ]
      },
      {
        "id": 62,
        "title": "Process and Service Management",
        "content": [
          "Managing Processes: Monitoring processes with ps, top, htop, and kill.",
          "Understanding and managing daemons.",
          "Systemd and Service Management: Starting, stopping, and managing services with systemctl.",
          "Creating and managing custom services."
        ]
      },
      {
        "id": 63,
        "title": "Networking and Security Essentials",
        "content": [
          "Network Configuration: Managing IP addresses and network interfaces.",
          "Tools: ping, netstat, ss, traceroute, and curl.",
          "Firewall Management: Configuring iptables and firewalld.",
          "Securing services with SELinux or AppArmor.",
          "SSH Configuration: Securing and managing SSH connections.",
          "Using SSH keys for passwordless authentication."
        ]
      },
      {
        "id": 64,
        "title": "File Systems and Storage Management",
        "content": [
          "File System Basics: Partitioning and formatting disks with fdisk, parted, and mkfs.",
          "Mounting and unmounting file systems.",
          "LVM and RAID: Managing logical volumes with LVM.",
          "Configuring software RAID for redundancy.",
          "File System Troubleshooting: Using tools like fsck, df, and du.",
          "Diagnosing disk space issues."
        ]
      },
      {
        "id": 65,
        "title": "Automation and Scripting",
        "content": [
          "Introduction to Shell Scripting: Writing and executing basic shell scripts.",
          "Using variables, loops, and conditionals.",
          "Automating Tasks with Cron and At: Scheduling recurring jobs with cron.",
          "One-time job scheduling with at.",
          "Industry Use Cases: Automating system updates and backups.",
          "Custom scripts for monitoring and alerting."
        ]
      },
      {
        "id": 66,
        "title": "Package Management and Software Installation",
        "content": [
          "Package Managers Overview: Managing software with apt, yum, and dnf.",
          "Installing, updating, and removing packages.",
          "Source-Based Installation: Compiling and installing software from source.",
          "Managing dependencies with tools like make and gcc."
        ]
      },
      {
        "id": 67,
        "title": "Monitoring and Performance Tuning",
        "content": [
          "Monitoring Tools: Using vmstat, iostat, and sar for performance monitoring.",
          "Log management with journalctl and rsyslog.",
          "Performance Optimization: Tuning kernel parameters with sysctl.",
          "Optimizing disk I/O and memory usage."
        ]
      },
      {
        "id": 68,
        "title": "Security and Compliance",
        "content": [
          "System Hardening: Disabling unnecessary services and ports.",
          "Applying security patches and updates.",
          "Auditing and Compliance: Using auditd for tracking system changes.",
          "Managing logs for compliance and security purposes."
        ]
      }
    ]
  },
  {
    "id": 10,
    "title": "Module 10",
    "subtitle": "AWS DevOps Services",
    "topics": [
      {
        "id": 69,
        "title": "Introduction to AWS for DevOps",
        "content": [
          "What is AWS DevOps?",
          "Overview of DevOps practices and principles.",
          "Role of AWS in enabling automation and scalability."
        ]
      },
      {
        "id": 70,
        "title": "AWS Core Services Overview",
        "content": [
          "Key services: EC2, S3, RDS, Lambda, and Elastic Load Balancer (ELB).",
          "Understanding the shared responsibility model."
        ]
      },
      {
        "id": 71,
        "title": "Infrastructure as Code (IaC) with AWS",
        "content": [
          "Introduction to Infrastructure as Code: Benefits of IaC in DevOps.",
          "Comparison of AWS CloudFormation and Terraform.",
          "AWS CloudFormation: Writing CloudFormation templates.",
          "Automating resource creation and updates.",
          "AWS CDK (Cloud Development Kit): Introduction to CDK for IaC.",
          "Writing IaC with programming languages (e.g., Python, TypeScript)."
        ]
      },
      {
        "id": 72,
        "title": "CI/CD Pipelines on AWS",
        "content": [
          "Introduction to CI/CD: Principles and practices of CI/CD in AWS.",
          "Tools overview: CodeCommit, CodeBuild, CodePipeline, CodeDeploy.",
          "Building a CI/CD Pipeline: Automating deployments with AWS CodePipeline.",
          "Integrating with GitHub and other version control systems.",
          "Blue-Green Deployments and Canary Releases: Strategies for minimizing deployment downtime.",
          "Implementation using CodeDeploy and Elastic Beanstalk."
        ]
      },
      {
        "id": 73,
        "title": "Containerization and Orchestration",
        "content": [
          "Docker on AWS: Running containerized applications on AWS.",
          "Using Elastic Container Registry (ECR) for image storage.",
          "Kubernetes with AWS EKS: Deploying and managing Kubernetes clusters with EKS.",
          "Scaling and monitoring containerized applications.",
          "AWS Fargate: Running serverless containers without managing infrastructure."
        ]
      },
      {
        "id": 74,
        "title": "Monitoring and Logging",
        "content": [
          "AWS CloudWatch: Setting up custom metrics and alarms.",
          "Monitoring application and infrastructure performance.",
          "AWS CloudTrail: Logging and auditing AWS account activities.",
          "Ensuring compliance and tracking API usage.",
          "Third-Party Monitoring Tools: Integrating tools like Datadog, Prometheus, and Grafana with AWS."
        ]
      },
      {
        "id": 75,
        "title": "Serverless Architecture for DevOps",
        "content": [
          "Introduction to Serverless Computing: Benefits and use cases of serverless in DevOps.",
          "Key services: AWS Lambda, API Gateway, DynamoDB.",
          "Building Serverless Applications: Writing and deploying Lambda functions.",
          "Integrating API Gateway for RESTful APIs.",
          "Event-Driven Architectures: Leveraging SQS, SNS, and EventBridge for automation."
        ]
      },
      {
        "id": 76,
        "title": "AWS Security Best Practices",
        "content": [
          "Identity and Access Management (IAM): Managing users, groups, and roles securely.",
          "Policies and permissions best practices.",
          "Securing Applications: Using AWS Secrets Manager and Systems Manager Parameter Store.",
          "Encrypting data with KMS and S3 bucket policies.",
          "Auditing and Compliance: Ensuring security with AWS Config and Trusted Advisor.",
          "Implementing multi-factor authentication (MFA)."
        ]
      },
      {
        "id": 77,
        "title": "High Availability and Scalability",
        "content": [
          "Load Balancing and Auto Scaling: Configuring ELB and Application Load Balancers.",
          "Setting up Auto Scaling Groups for EC2 instances.",
          "AWS Elastic Beanstalk: Simplifying application deployment and scaling.",
          "Managing multiple environments.",
          "AWS Global Infrastructure: Using Route 53 for DNS and global traffic management.",
          "Leveraging AWS CloudFront for content delivery."
        ]
      },
      {
        "id": 78,
        "title": "Cost Optimization and Management",
        "content": [
          "AWS Cost Management Tools: Using Cost Explorer and AWS Budgets.",
          "Analyzing usage patterns to reduce costs.",
          "Optimizing Resources: Rightsizing EC2 instances and auto-scaling.",
          "Leveraging Spot Instances and Savings Plans.",
          "AWS Trusted Advisor: Cost-saving recommendations and best practices."
        ]
      }
    ]
  },
  {
    "id": 11,
    "title": "Module 11",
    "subtitle": "Azure & GCP Cloud",
    "topics": [
      {
        "id": 79,
        "title": "Azure Cloud Basics",
        "content": [
          "What is Microsoft Azure?",
          "History and significance of Azure in the cloud ecosystem.",
          "Overview of Azure's global infrastructure."
        ]
      },
      {
        "id": 80,
        "title": "Core Azure Services",
        "content": [
          "Compute: Azure Virtual Machines, Azure App Services.",
          "Storage: Blob Storage, File Storage, Disk Storage.",
          "Networking: Virtual Network (VNet), Azure Load Balancer.",
          "Databases: Azure SQL Database, Cosmos DB."
        ]
      },
      {
        "id": 81,
        "title": "Getting Started with Azure",
        "content": [
          "Navigating the Azure Portal.",
          "Creating an Azure account.",
          "Understanding subscriptions and resource groups."
        ]
      },
      {
        "id": 82,
        "title": "GCP Cloud Basics",
        "content": [
          "What is Google Cloud Platform (GCP)?",
          "Overview of GCP's origins and unique features.",
          "GCP's global regions and zones."
        ]
      },
      {
        "id": 83,
        "title": "Core GCP Services",
        "content": [
          "Compute: Compute Engine, App Engine, Kubernetes Engine (GKE).",
          "Storage: Cloud Storage, Filestore, Persistent Disk.",
          "Networking: Virtual Private Cloud (VPC), Cloud Load Balancing.",
          "Databases: Cloud SQL, Bigtable, Firestore."
        ]
      },
      {
        "id": 84,
        "title": "Getting Started with GCP",
        "content": [
          "Navigating the GCP Console.",
          "Setting up a free-tier account.",
          "Understanding projects and billing."
        ]
      },
      {
        "id": 85,
        "title": "Identity, Access, and Security in Azure and GCP",
        "content": [
          "Azure Identity and Security: Introduction to Azure Active Directory (AAD).",
          "Role-Based Access Control (RBAC).",
          "Azure Security Center overview.",
          "GCP Identity and Security: Understanding IAM (Identity and Access Management).",
          "Service accounts and roles in GCP.",
          "GCP Security Command Center overview."
        ]
      },
      {
        "id": 86,
        "title": "Compute Services in Azure and GCP",
        "content": [
          "Azure Compute Services: Creating and managing Azure Virtual Machines.",
          "Serverless computing with Azure Functions.",
          "GCP Compute Services: Deploying virtual machines with Compute Engine.",
          "Introduction to Cloud Run for serverless applications."
        ]
      },
      {
        "id": 87,
        "title": "Storage and Databases in Azure and GCP",
        "content": [
          "Azure Storage Services: Working with Azure Blob Storage.",
          "Introduction to Azure Data Lake.",
          "GCP Storage Services: Using Cloud Storage buckets.",
          "Overview of Google BigQuery for analytics.",
          "Comparison of Azure and GCP Storage Services: Choosing the right service based on use cases."
        ]
      },
      {
        "id": 88,
        "title": "Networking and Load Balancing in Azure and GCP",
        "content": [
          "Azure Networking: Setting up Virtual Networks (VNets).",
          "Configuring Azure Application Gateway.",
          "GCP Networking: Working with Virtual Private Cloud (VPC).",
          "Load balancing with Google Cloud Load Balancer."
        ]
      }
    ]
  },
  {
    "id": 13,
    "title": "Module 13",
    "subtitle": "Shell Scripting",
    "topics": [
      {
        "id": 100,
        "title": "Introduction to Shell Scripting",
        "content": [
          "What is Shell Scripting?",
          "Understanding the role of shell scripting in DevOps.",
          "Differences between shell scripts and other scripting languages.",
          "Overview of various shells (Bash, Zsh, Fish, etc.) and their use cases."
        ]
      },
      {
        "id": 101,
        "title": "Setting Up the Environment",
        "content": [
          "Choosing the right shell for your environment (Bash for Linux, PowerShell for Windows, etc.).",
          "Basic setup and configuration of a shell environment.",
          "Accessing the terminal and using common shell commands."
        ]
      },
      {
        "id": 102,
        "title": "Understanding Shell Basics",
        "content": [
          "Basic commands and navigation (ls, cd, pwd, mkdir, etc.).",
          "Redirection and piping in shell (>, >>, <, |).",
          "Understanding file permissions and working with chmod, chown, etc."
        ]
      },
      {
        "id": 103,
        "title": "Variables and Data Types",
        "content": [
          "Defining Variables: Creating and using variables in shell scripts.",
          "Global vs local variables.",
          "Environment variables and their significance in scripting.",
          "Data Types and Data Structures: Handling strings, integers, and arrays.",
          "Using arrays in shell scripting for data management.",
          "Looping through arrays and manipulating data."
        ]
      },
      {
        "id": 104,
        "title": "User Input and Output",
        "content": [
          "Using read for interactive scripts.",
          "Printing messages with echo, printf.",
          "Redirecting input and output (stdin, stdout, stderr)."
        ]
      },
      {
        "id": 105,
        "title": "Control Structures and Logic",
        "content": [
          "Conditional Statements: if, else, elif, and nested conditions.",
          "Using test and [[ ]] for conditional expressions.",
          "Advanced logical operators (&&, ||, !).",
          "Loops and Iteration: Using for, while, and until loops.",
          "Looping through files, directories, or command output.",
          "Efficient iteration through arrays.",
          "Error Handling: Using exit codes for error handling.",
          "Handling errors using trap.",
          "Debugging scripts with set -x and set -e."
        ]
      },
      {
        "id": 106,
        "title": "Functions and Modularization",
        "content": [
          "Creating Functions: Writing reusable functions in shell scripts.",
          "Function arguments and return values.",
          "Best practices for modular scripting.",
          "Script Optimization: Organizing scripts into smaller, reusable parts.",
          "Using function libraries for larger automation tasks.",
          "Writing scripts for performance and efficiency."
        ]
      },
      {
        "id": 107,
        "title": "Argument Parsing",
        "content": [
          "Using $1, $2, etc., for passing arguments to scripts.",
          "Using getopts for more advanced argument parsing.",
          "Handling optional flags and parameters."
        ]
      },
      {
        "id": 108,
        "title": "File and Process Management",
        "content": [
          "File Operations: Reading and writing files in shell scripts.",
          "Working with text files: grep, sed, awk.",
          "Managing logs, backups, and file permissions.",
          "Process Control: Managing processes with ps, top, kill, bg, fg, etc.",
          "Automating process management: creating, stopping, and restarting services.",
          "Background and foreground processes in shell scripts."
        ]
      },
      {
        "id": 109,
        "title": "Scheduled Jobs",
        "content": [
          "Using cron for scheduling recurring tasks.",
          "Writing and managing cron jobs for automation.",
          "Handling log rotation and clean-up tasks."
        ]
      },
      {
        "id": 110,
        "title": "Advanced Shell Scripting Concepts",
        "content": [
          "Regular Expressions and Pattern Matching: Using regular expressions with grep, sed, awk, and find.",
          "Advanced string manipulation techniques.",
          "Pattern matching for file searching and log analysis.",
          "Working with APIs: Making HTTP requests using curl or wget.",
          "Handling JSON responses with jq.",
          "Automating API calls for DevOps tasks (e.g., fetching logs, deploying services)."
        ]
      },
      {
        "id": 111,
        "title": "Automation with Shell Scripting",
        "content": [
          "Automating server provisioning tasks (e.g., with scp, rsync).",
          "Configuring and automating cloud resources with shell scripts (AWS CLI, Azure CLI, GCP).",
          "Continuous integration and deployment automation with shell scripts."
        ]
      },
      {
        "id": 112,
        "title": "Troubleshooting and Debugging",
        "content": [
          "Debugging Shell Scripts: Common errors and how to resolve them.",
          "Using set -e and set -x for debugging.",
          "Checking script execution status and troubleshooting with logs."
        ]
      },
      {
        "id": 113,
        "title": "Performance Tuning and Optimization",
        "content": [
          "Identifying performance bottlenecks in scripts.",
          "Optimizing loops, file handling, and process management.",
          "Best practices for large-scale shell scripting in production environments."
        ]
      }
    ]
  },
  {
    "id": 14,
    "title": "Module 14",
    "subtitle": "Integration of DevOps Tools or Capstone Projects",
    "topics": [
      {
        "id": 200,
        "title": "Integrating Git with DevOps Tools",
        "content": [
          "Continuous Integration/Continuous Deployment (CI/CD): Integrate Git with CI/CD pipelines to automate testing and deployment processes.",
          "Monitoring and Logging: Use tools like Prometheus and Grafana to monitor Git repositories and visualize metrics.",
          "Infrastructure as Code (IaC): Implement Git in conjunction with tools like Terraform for infrastructure management."
        ]
      },
      {
        "id": 201,
        "title": "Integrating Docker with DevOps Tools",
        "content": [
          "Continuous Integration and Continuous Deployment (CI/CD): Integrating Docker with Jenkins for automated builds and deployments.",
          "Using Docker in GitLab CI/CD pipelines.",
          "Configuration Management with Ansible: Automating Docker container deployments using Ansible.",
          "Managing configurations across multiple containers."
        ]
      },
      {
        "id": 202,
        "title": "Monitoring and Logging",
        "content": [
          "Implementing monitoring solutions like Prometheus and Grafana for Docker containers.",
          "Setting up centralized logging for containerized applications."
        ]
      },
      {
        "id": 203,
        "title": "Integrating Jenkins with Other Tools",
        "content": [
          "Containerization and Virtualization: Integrating Jenkins with Docker for containerized builds.",
          "Using Kubernetes for scalable build environments.",
          "Managing containerized applications through Jenkins.",
          "Monitoring and Reporting: Setting up monitoring tools for Jenkins health.",
          "Configuring build metrics and dashboards.",
          "Implementing alerting mechanisms for build failures."
        ]
      },
      {
        "id": 204,
        "title": "Cloud Integration",
        "content": [
          "Integrating Jenkins with cloud services like AWS, Azure, and Google Cloud.",
          "Automating deployments to cloud environments.",
          "Managing cloud resources through Jenkins pipelines."
        ]
      },
      {
        "id": 205,
        "title": "Integrating Ansible with Kubernetes",
        "content": [
          "Deploying Kubernetes Clusters: Automating Kubernetes setup and management.",
          "Helm Integration: Using Helm charts to deploy Kubernetes applications with Ansible.",
          "GitOps with Ansible: Managing Kubernetes manifests using Git workflows."
        ]
      },
      {
        "id": 206,
        "title": "Integrating Terraform with DevOps Pipelines",
        "content": [
          "CI/CD with Terraform: Automating Terraform runs using Jenkins, GitLab CI, or GitHub Actions.",
          "Handling approvals and rollbacks in Terraform pipelines."
        ]
      },
      {
        "id": 207,
        "title": "Integration of GitLab with Other DevOps Tools",
        "content": [
          "Integrating with Cloud Platforms: Deploying to AWS, Azure, and Google Cloud from GitLab.",
          "Setting up GitLab pipelines for multi-cloud deployments.",
          "Containerization Tools: Using GitLab with Docker and Kubernetes.",
          "Helm charts for Kubernetes deployments with GitLab CI.",
          "Monitoring and Logging Tools: Integration with Prometheus and Grafana for pipeline monitoring.",
          "Centralized logging with ELK Stack and GitLab.",
          "Configuration Management Tools: Automating infrastructure changes with Ansible and Terraform.",
          "GitLab CI/CD pipelines for IaC workflows."
        ]
      },
      {
        "id": 208,
        "title": "Shell Scripting for DevOps Pipelines",
        "content": [
          "Integrating Shell Scripts in CI/CD Pipelines: Using shell scripts in GitLab CI, Jenkins, and other CI/CD tools.",
          "Automating testing and deployment processes with shell scripts.",
          "Handling version control, deployments, and rollbacks in scripts.",
          "Containerization and Orchestration: Writing shell scripts to manage Docker containers.",
          "Using shell scripts in Kubernetes automation tasks.",
          "Automating container deployments, scaling, and monitoring."
        ]
      },
      {
        "id": 209,
        "title": "Infrastructure as Code (IaC) with Shell Scripts",
        "content": [
          "Automating infrastructure management using AWS CLI, Azure CLI, and GCP CLI.",
          "Writing shell scripts for managing cloud infrastructure and services.",
          "Integrating IaC workflows with GitOps using shell scripts."
        ]
      }
    ]
  }
  
  
  
  
  
  
  
  
  
  
]

