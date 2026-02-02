> This page storages all my career infromation

### Company

- **HBLab JSC**
  - Position: Back-End Developer
  - Duration: 06/2025 – Now
  - Employment Type: Full time
  - Location: Hanoi Office
- **FPT Software**
  - Position: Internship
  - Duration: 12/2023 – 12/2024
  - Employment Type: Full time
  - Location: Hoa Lac Campus

### Projects

#### YD
* Automatic Supplies Ordering System.
* Designed and developed backend services for automated inventory and order processing systems serving 500+ stores.
* It generates orders based on sales and inventory data to reduce stock shortages and manual operations.
	##### **Technical**
	* **Architecture:** Modular Monolith, Layered Architecture, DDD-lite.
	* **Backend:** Java 17, Spring Boot 3.2, Spring Security (JWT, RBAC), Spring Data JPA, Hibernate.
	* **Database:** PostgreSQL 15, Flyway, Redis (ElastiCache).
	* **Infrastructure:** AWS Fargate, Lambda (Python batch jobs), RDS, S3, CloudWatch, GitHub Actions.
	* **Patterns:** Repository, Event-driven (Spring Events), Outbox Pattern.
	
	##### **Key Contributions**
	* Developed REST APIs for Supplies Master with pagination, validation, and RBAC.
  * Implemented inventory configuration features (order thresholds, schedules, store groups) that control when and how stores replenish stock.
	* Implemented JPA entities and repositories for 8+ tables.
	* Implemented order calculation logic using different strategies based on sales data.
	* Built Stock Adjustment APIs with event-driven processing and Redis caching, reducing response time from ~200ms to ~50ms.
	* Optimized database performance by adding indexes and fixing production defects reported by the QA team.

#### KJ SYSTEM (KOJIRO 803)
* An educational platform for Japanese users preparing for driving license theory exams.
* Multi-platform system with 5,000+ app downloads (Admin Web, User Web (Next.js), and Mobile App (React Native)).
* Supports 15+ modules such as practice exercises, mock exams, proficiency tests, video tutorials (up to 5GB), and a community Q&A board.
	##### **Technical**
	* **Architecture:** Microservices, Event-Driven, Clean Architecture, BFF pattern, CQRS.
	* **Microservices (7):** Auth & Authorization, User Management, Content Management, Assessment, Media, Notification, Analytics.
	* **Backend:** 
		* Java 17, Spring Boot 3.2, Spring Security (JWT, RBAC), Spring Data JPA, Hibernate (Auth, User, Assessment, Analytics services).
		* TypeScript, NestJS, Prisma, Mongoose (Content, Media, Notification services).
	* **Database:** PostgreSQL 15 (primary), MongoDB (media metadata), Redis (caching, session, rate limiting).
	* **Message Broker:** Apache Kafka (event-driven communication), RabbitMQ (notification queue).
	* **API Gateway:** Kong (with BFF to optimize APIs for Admin, Web, and Mobile clients).
	* **Infrastructure:** AWS (Fargate/EKS, RDS, ElastiCache, S3, CloudFront CDN, Lambda for video transcoding), Docker, Kubernetes.
	* **CI/CD:** GitHub Actions, Terraform (IaC).
	* **Monitoring:** Prometheus, Grafana, ELK/Loki (logs), Jaeger/X-Ray (tracing), Sentry (APM).
	* **Patterns:** Database-per-Service, Saga Pattern, Outbox Pattern, API Versioning.

	##### **Key Contributions**
	* Developed REST APIs for the Assessment Service (Spring Boot) covering driving theory exercises and mock exams.
	* Implemented Content Management APIs (NestJS + Prisma) with pagination and filtering.
	* Built Media Service endpoints with AWS S3 integration and presigned URLs for secure video uploads.
	* Implemented authentication and RBAC using Spring Security with JWT.
	* Developed Kafka producers and consumers for inter-service communication and applied the Outbox Pattern.
	* Built Notification Service APIs with RabbitMQ and Firebase Cloud Messaging.
	* Added Redis caching for frequently accessed data, improving performance and reducing database load.
	* Implemented API versioning (v1/v2) through Kong Gateway for mobile backward compatibility.
	* Wrote unit and integration tests using JUnit and Mockito.
	* Deployed services with Docker and GitHub Actions to AWS Fargate and monitored them via Prometheus/Grafana.


#### BBUS (Bus Management System) - đồ án
* A comprehensive school bus management platform for real-time tracking, student safety monitoring, and parent-driver communication.
* Multi-platform system with Web Admin Portal (React), Mobile App (Flutter for parents/drivers), and Backend API (Spring Boot).
* Serves 500+ buses, 5,000+ students, and 10,000+ parents with real-time GPS tracking, attendance management, and push notifications.
	##### **Technical (chi tiết - ghi chú)**
	* **Architecture:** Monolithic Backend, Component-Driven Frontend, Clean Architecture Mobile.
	* **Backend:** Java 17, Spring Boot 3.3.5, Spring Security (JWT, RBAC), Spring Data JPA, Hibernate, Spring WebSocket.
	* **Frontend (Admin Web):** React 19, TypeScript 5.7, Vite 6, TanStack Router (file-based routing), TanStack Query (server state), Zustand (global state), Radix UI, Tailwind CSS, React Hook Form + Zod.
	* **Mobile:** Flutter 3.x, Dart 3.5, BLoC pattern, GoRouter, Dio, Hive (offline storage), Firebase Cloud Messaging.
	* **Database:** PostgreSQL 15 (24 entities with complex relationships).
	* **Real-time:** WebSocket (live updates), MQTT (GPS tracking), Firebase Cloud Messaging (push notifications).
	* **Cloud Services:** AWS S3 (file storage), SendGrid (email), Firebase (push notifications).
	* **Maps Integration:** Google Maps API, Leaflet (route visualization, real-time tracking).
	* **Infrastructure:** Docker, multi-environment profiles (dev/test/prod), Swagger/OpenAPI documentation.

	##### **Technical (rút gọn)**
	* **Architecture:** Monolithic Backend, Component-Driven Frontend, Clean Architecture Mobile.
	* **Backend:** Java 17, Spring Boot 3.3.5, Spring Security (JWT, RBAC), Spring Data JPA, Hibernate, Spring WebSocket.
	* **Frontend (Admin Web):** React 19, TypeScript 5.7, Vite 6, TanStack Router/Query, Zustand, Radix UI, Tailwind CSS.
	* **Database & Real-time:** PostgreSQL 15, Spring WebSocket (bi-directional messaging), MQTT (GPS tracking), Firebase Cloud Messaging.
	* **Cloud Services:** AWS S3 (file storage), SendGrid (email), Firebase (FCM).

	##### **Key Contributions**
	
	**Backend Development (Partial):**
	- Developed REST APIs for Student Management, Attendance Tracking, and Event Reporting modules.
	- Built attendance check-in/check-out APIs with checkpoint tracking and real-time updates via WebSocket.
	- Implemented event reporting services with severity levels and lifecycle status tracking.
	- Integrated AWS S3 for file storage and Firebase Cloud Messaging for safety notifications.
	- Worked on real-time bus location updates using MQTT and pushed them to WebSocket client

	**Frontend Development (Full Admin Web):**
	* Built the entire Admin Web Portal from scratch, using React 19 and TypeScript, featuring 14 modules and 45+ type-safe routes
	* Implemented real-time dashboards with Google Maps/Leaflet integration and state management using Zustand and TanStack Query.
