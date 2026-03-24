// questions.js — 30 QCM DevOps M1 basé sur le cours de Florian Forestier (ISIM A)
export const QUESTIONS = [
  // ====== HISTOIRE & VIRTUALISATION ======
  {
    category: "Histoire & Virtualisation",
    question: "En quelle année VMware Workstation a-t-il introduit la virtualisation pour le marché professionnel ?",
    options: ["1991", "1999", "2001", "2006"],
    correct: 1,
    explanation: "VMware publie <strong>VMware Workstation en 1999</strong>, permettant d'allouer des portions de serveurs physiques à des machines virtuelles — c'est la naissance de la virtualisation moderne pour l'industrie."
  },
  {
    category: "Histoire & Virtualisation",
    question: "Quelle technique IBM a-t-elle inventée en 1979, souvent confondue avec la virtualisation ?",
    options: ["La containerisation", "L'isolation noyau utilisateur", "L'hyperviseur de type 2", "Le RAID"],
    correct: 1,
    explanation: "<strong>IBM invente l'isolation</strong>, appelée «isolation en noyau utilisateur». Chaque utilisateur connecté a l'impression de disposer d'un ordinateur entier, sans voir les autres. Ce n'est pas de la virtualisation au sens moderne."
  },
  {
    category: "Histoire & Virtualisation",
    question: "Qu'est-ce qu'un hyperviseur ?",
    options: [
      "Un orchestrateur de conteneurs Docker",
      "Une plateforme de virtualisation permettant à plusieurs OS de tourner sur une même machine physique en même temps",
      "Un proxy inversé pour distribuer le trafic réseau",
      "Un daemon Linux gérant les namespaces et cgroups"
    ],
    correct: 1,
    explanation: "Un hyperviseur est «une plate-forme de virtualisation qui permet à <strong>plusieurs systèmes d'exploitation de travailler sur une même machine physique en même temps</strong>» (définition du cours)."
  },
  {
    category: "Histoire & Virtualisation",
    question: "Quelle est la principale différence entre un hyperviseur de Type 1 et un hyperviseur de Type 2 ?",
    options: [
      "Le Type 1 est open-source, le Type 2 est propriétaire",
      "Le Type 1 est plus ancien et s'installe directement sur le matériel ; le Type 2 est standalone et moins performant",
      "Le Type 1 gère les conteneurs, le Type 2 gère les VMs",
      "Le Type 2 offre de meilleures performances car il accède directement au CPU"
    ],
    correct: 1,
    explanation: "Le <strong>Type 1</strong> (bare-metal) s'installe directement sur le matériel, très performant mais contraignant. Le <strong>Type 2</strong> s'installe comme une application sur un OS hôte, utilisable presque partout mais moins performant."
  },
  {
    category: "Histoire & Virtualisation",
    question: "Docker est classifié comme un isolateur, pas un hyperviseur. Quels autres isolateurs sont cités dans le cours ?",
    options: [
      "VirtualBox, VMware, Hyper-V",
      "VServer, FreeBSD Jail, OpenVZ, LXC",
      "Kubernetes, Nomad, Mesos",
      "Vagrant, Packer, Terraform"
    ],
    correct: 1,
    explanation: "Le cours précise que <strong>Docker est un isolateur</strong>, et cite notamment : VServer, FreeBSD Jail, OpenVZ et LXC comme autres isolateurs. La différence avec une VM : il n'y a pas réellement de virtualisation, mais un partage du noyau hôte."
  },

  // ====== PHILOSOPHIE DEVOPS ======
  {
    category: "Philosophie DevOps",
    question: "En quelle année et par qui la philosophie DevOps a-t-elle été fondée ?",
    options: [
      "2001 — Kent Beck & Martin Fowler",
      "2006 — Jeff Bezos & Werner Vogels",
      "2007 — Patrick Debois & Andrew Shafer",
      "2010 — Linus Torvalds & Brendan Eich"
    ],
    correct: 2,
    explanation: "<strong>2007</strong> : Patrick Debois 🇧🇪 et Andrew Shafer 🇺🇸 posent les fondements de DevOps. L'objectif est de rassembler devs et ops au sein des projets et de propager les méthodes Agile à l'ensemble de l'infrastructure."
  },
  {
    category: "Philosophie DevOps",
    question: "Quel cloud provider pionnier, lancé en 2006, a permis de débloquer le dernier verrou de l'informatique moderne selon le cours ?",
    options: ["Google Cloud Platform", "Microsoft Azure", "AWS (Amazon Web Services)", "OVHcloud"],
    correct: 2,
    explanation: "En 2006, <strong>Jeff Bezos annonce AWS</strong>, le premier Cloud Provider au monde. N'importe qui peut désormais commander des machines virtuelles à la volée — le dernier bouchon de l'informatique moderne saute."
  },
  {
    category: "Philosophie DevOps",
    question: "Quelles sont les 8 étapes du cycle DevOps (boucle infinie) dans le bon ordre ?",
    options: [
      "Plan → Code → Test → Build → Release → Deploy → Operate → Monitor",
      "Plan → Code → Build → Test → Release → Deploy → Operate → Monitor",
      "Plan → Build → Code → Test → Deploy → Release → Operate → Monitor",
      "Code → Plan → Build → Test → Release → Deploy → Operate → Monitor"
    ],
    correct: 1,
    explanation: "Le cycle DevOps correct est : <strong>Plan → Code → Build → Test → Release → Deploy → Operate → Monitor</strong>. On planifie le sprint, on code, on build, on teste, on tag une version, on déploie, on opère (configuration), on surveille (monitoring/retours clients)."
  },
  {
    category: "Philosophie DevOps",
    question: "Que signifie le concept DevSecOps ?",
    options: [
      "Automatiser uniquement la sécurité réseau en production",
      "Inclure un membre de l'équipe cybersécurité tout au long du projet DevOps",
      "Utiliser Docker avec des certificats TLS pour sécuriser les conteneurs",
      "Remplacer les ops par des équipes de sécurité"
    ],
    correct: 1,
    explanation: "Le <strong>DevSecOps</strong> : «C'est comme DevOps, on inclut juste un membre d'une équipe de cybersécurité tout au long du projet.» (Florian Forestier). Pratique courante dans les grandes entreprises."
  },
  {
    category: "Philosophie DevOps",
    question: "Dans l'option DevOps choisie pour ce cours, quel est le degré d'autonomie des développeurs ?",
    options: [
      "Les ops accompagnent les devs tout au long, très présents",
      "Les devs gèrent l'infra, modifications soumises à l'avis des ops",
      "Autonomie complète : les devs gèrent déploiement et configuration de l'infra",
      "Les ops prennent toutes les décisions d'infrastructure"
    ],
    correct: 2,
    explanation: "Le cours choisit l'<strong>option 3 : autonomie complète 😎</strong>. Les ops sont en support, mais les développeurs assument entièrement le déploiement et la configuration de l'infrastructure."
  },

  // ====== DOCKER ======
  {
    category: "Docker 101",
    question: "Quelle commande permet de lancer un conteneur Docker en mode interactif avec un terminal bash ?",
    options: [
      "<code>docker run -d nginx bash</code>",
      "<code>docker run -it ubuntu bash</code>",
      "<code>docker exec ubuntu bash</code>",
      "<code>docker start -i ubuntu</code>"
    ],
    correct: 1,
    explanation: "<code>docker run -it ubuntu bash</code> : <strong>-i</strong> (interactive) garde stdin ouvert, <strong>-t</strong> alloue un pseudo-TTY. C'est la combinaison classique pour obtenir un terminal interactif dans un conteneur."
  },
  {
    category: "Docker 101",
    question: "Dans un Dockerfile, quelle instruction définit l'image de base ?",
    options: ["<code>BASE</code>", "<code>FROM</code>", "<code>ORIGIN</code>", "<code>USE</code>"],
    correct: 1,
    explanation: "<code><strong>FROM</strong></code> est la première instruction d'un Dockerfile ; elle définit l'image parente. Exemple : <code>FROM ubuntu:22.04</code> ou <code>FROM node:20-alpine</code>."
  },
  {
    category: "Docker 101",
    question: "Quelle est la différence entre <code>CMD</code> et <code>ENTRYPOINT</code> dans un Dockerfile ?",
    options: [
      "CMD est ignoré si ENTRYPOINT est défini",
      "ENTRYPOINT définit la commande principale non surchargeable facilement ; CMD fournit des arguments par défaut qui peuvent être remplacés",
      "CMD s'exécute au build, ENTRYPOINT au runtime",
      "Il n'y a aucune différence pratique"
    ],
    correct: 1,
    explanation: "<strong>ENTRYPOINT</strong> définit l'exécutable principal du conteneur (difficile à surcharger). <strong>CMD</strong> fournit des arguments par défaut passés à ENTRYPOINT (facilement remplacés via la ligne de commande <code>docker run … [commande]</code>)."
  },
  {
    category: "Docker 101",
    question: "Que fait <code>docker-compose up -d</code> ?",
    options: [
      "Télécharge uniquement les images sans démarrer les conteneurs",
      "Lance tous les services définis dans docker-compose.yml en mode détaché (arrière-plan)",
      "Reconstruit toutes les images et supprime les anciennes",
      "Arrête et supprime tous les conteneurs"
    ],
    correct: 1,
    explanation: "<code>docker-compose up <strong>-d</strong></code> démarre tous les services définis dans <code>docker-compose.yml</code> en mode <strong>détaché</strong> (daemon), libérant le terminal. Sans <code>-d</code>, les logs s'affichent en temps réel."
  },
  {
    category: "Docker 101",
    question: "Que représente l'instruction <code>EXPOSE 8080</code> dans un Dockerfile ?",
    options: [
      "Publie automatiquement le port 8080 sur la machine hôte",
      "Documente que le conteneur écoute sur le port 8080, mais ne publie pas le port automatiquement",
      "Crée un firewall rule autorisant le trafic TCP sur 8080",
      "Force Docker à mapper le port 8080 sur un port aléatoire de l'hôte"
    ],
    correct: 1,
    explanation: "<code>EXPOSE</code> est <strong>documentaire</strong> : il indique quelle interface réseau le conteneur utilise, mais ne publie rien automatiquement. Il faut utiliser <code>-p 8080:8080</code> au <code>docker run</code> pour exposer réellement le port."
  },

  // ====== OPENTOFU / IAAS ======
  {
    category: "OpenTofu / IaC",
    question: "Qu'est-ce que l'Infrastructure as Code (IaC) ?",
    options: [
      "Gérer l'infrastructure via des scripts shell exécutés manuellement",
      "Décrire et provisionner l'infrastructure via des fichiers de configuration versionnés et reproductibles",
      "Utiliser une interface graphique pour créer des VMs dans le cloud",
      "Automatiser uniquement les sauvegardes de bases de données"
    ],
    correct: 1,
    explanation: "L'<strong>IaC</strong> permet de décrire l'infrastructure (serveurs, réseaux, stockage…) dans des <strong>fichiers versionnés</strong> (Git), rendant le provisionnement <strong>reproductible, auditable et automatisable</strong>. OpenTofu (fork open-source de Terraform) en est un exemple clé."
  },
  {
    category: "OpenTofu / IaC",
    question: "OpenTofu est un fork open-source de quel outil ?",
    options: ["Pulumi", "Ansible", "Terraform", "CloudFormation"],
    correct: 2,
    explanation: "<strong>OpenTofu</strong> est le fork open-source communautaire de <strong>HashiCorp Terraform</strong>, créé après que HashiCorp ait changé la licence de Terraform en BSL (Business Source License) en 2023. Il est maintenu par la Linux Foundation."
  },
  {
    category: "OpenTofu / IaC",
    question: "Quelle commande OpenTofu/Terraform affiche un plan d'exécution sans appliquer de changements ?",
    options: [
      "<code>tofu apply --dry-run</code>",
      "<code>tofu preview</code>",
      "<code>tofu plan</code>",
      "<code>tofu diff</code>"
    ],
    correct: 2,
    explanation: "<code><strong>tofu plan</strong></code> (ou <code>terraform plan</code>) analyse la configuration et montre ce qui sera créé, modifié ou détruit — sans rien modifier. C'est la commande de prévisualisation indispensable avant <code>apply</code>."
  },
  {
    category: "OpenTofu / IaC",
    question: "Dans OpenTofu, qu'est-ce qu'un 'provider' ?",
    options: [
      "Un module réutilisable définissant des ressources génériques",
      "Un plugin qui permet à OpenTofu d'interagir avec un service (AWS, OpenStack, Docker…)",
      "Un fichier d'état stockant l'infrastructure actuelle",
      "Une variable d'environnement injectée dans la configuration"
    ],
    correct: 1,
    explanation: "Un <strong>provider</strong> est un plugin qui permet à OpenTofu de communiquer avec une API externe (AWS, GCP, OpenStack, Docker, GitLab…). Il expose des <em>resources</em> et des <em>data sources</em> utilisables dans la configuration."
  },

  // ====== ANSIBLE ======
  {
    category: "Ansible & Automatisation",
    question: "Quelle est la particularité d'Ansible par rapport à d'autres outils de configuration (Chef, Puppet) ?",
    options: [
      "Ansible nécessite l'installation d'un agent sur chaque machine cible",
      "Ansible est agentless : il communique via SSH sans agent sur les machines cibles",
      "Ansible utilise un daemon central pour pousser les configurations",
      "Ansible ne fonctionne qu'avec des conteneurs Docker"
    ],
    correct: 1,
    explanation: "Ansible est <strong>agentless</strong> : il se connecte aux machines cibles uniquement via <strong>SSH</strong> (ou WinRM pour Windows), sans installer de daemon ou d'agent. C'est l'une de ses grandes forces en simplicité opérationnelle."
  },
  {
    category: "Ansible & Automatisation",
    question: "Dans Ansible, qu'est-ce qu'un 'playbook' ?",
    options: [
      "Un inventaire listant les hôtes à configurer",
      "Un fichier YAML décrivant une série de tâches à exécuter sur des hôtes",
      "Un module permettant d'installer des paquets",
      "Un plugin de connexion SSH pour Ansible"
    ],
    correct: 1,
    explanation: "Un <strong>playbook</strong> est un fichier <strong>YAML</strong> qui décrit une serie de <em>plays</em>, chaque play ciblant un groupe d'hôtes et listant les <em>tasks</em> (tâches) à exécuter dans l'ordre. C'est l'unité principale d'Ansible."
  },
  {
    category: "Ansible & Automatisation",
    question: "Qu'est-ce que l'idempotence dans le contexte Ansible ?",
    options: [
      "La capacité d'Ansible à s'exécuter en parallèle sur plusieurs hôtes",
      "Le fait qu'exécuter un playbook plusieurs fois produit toujours le même résultat final",
      "La fonctionnalité de chiffrement des variables sensibles avec Ansible Vault",
      "La possibilité de définir des rôles réutilisables dans plusieurs projets"
    ],
    correct: 1,
    explanation: "L'<strong>idempotence</strong> signifie qu'appliquer un playbook 1 fois ou 10 fois donne <strong>le même résultat final</strong>. Si l'état cible est déjà atteint, Ansible ne fait rien (état = <strong>ok</strong> vs <strong>changed</strong>). C'est crucial pour des infras fiables."
  },
  {
    category: "Ansible & Automatisation",
    question: "Comment s'appelle le fichier définissant la liste des machines gérées par Ansible ?",
    options: ["hosts.yml ou inventory", "Playbook", "ansible.cfg", "Vagrantfile"],
    correct: 0,
    explanation: "Le fichier <strong>inventory</strong> (souvent appelé <code>hosts</code> ou <code>inventory.yml</code>) liste les machines cibles groupées. Il peut être statique (fichier texte/YAML) ou dynamique (script générant l'inventaire depuis une API cloud)."
  },

  // ====== GITLAB CI ======
  {
    category: "GitLab CI/CD",
    question: "Qu'est-ce qu'un 'pipeline' dans GitLab CI/CD ?",
    options: [
      "Un réseau Docker permettant aux conteneurs de communiquer",
      "Une séquence automatisée de stages (jobs) déclenchée à chaque push ou événement Git",
      "Un outil de merge automatique des branches feature",
      "Un système de monitoring des performances de l'application"
    ],
    correct: 1,
    explanation: "Un <strong>pipeline GitLab CI/CD</strong> est une séquence automatisée de <em>stages</em> (ex: build → test → deploy). Il est déclenché automatiquement par des événements Git (push, merge request…) et défini dans le fichier <code>.gitlab-ci.yml</code>."
  },
  {
    category: "GitLab CI/CD",
    question: "Dans un fichier .gitlab-ci.yml, que représente un 'runner' ?",
    options: [
      "Un conteneur Docker dans lequel le job s'exécute",
      "Un agent installé sur une machine qui exécute les jobs CI/CD",
      "Un webhook GitLab déclenchant le pipeline",
      "Une variable d'environnement injectée dans le pipeline"
    ],
    correct: 1,
    explanation: "Un <strong>runner</strong> est un <strong>agent (daemon)</strong> installé sur une machine (locale, VM, container…) qui récupère et exécute les jobs CI/CD assignés par GitLab. Il peut être partagé (shared runner) ou dédié à un projet."
  },
  {
    category: "GitLab CI/CD",
    question: "Quelle directive .gitlab-ci.yml permet de définir les stages (étapes) du pipeline dans le bon ordre ?",
    options: [
      "<code>jobs:</code>",
      "<code>pipeline:</code>",
      "<code>stages:</code>",
      "<code>workflow:</code>"
    ],
    correct: 2,
    explanation: "La directive <code><strong>stages:</strong></code> au niveau racine du <code>.gitlab-ci.yml</code> définit l'ordre des étapes du pipeline. Les jobs sont associés à un stage via la clé <code>stage:</code>. Les stages s'exécutent séquentiellement, les jobs d'un même stage en parallèle."
  },
  {
    category: "GitLab CI/CD",
    question: "Quelle est la différence entre Continuous Integration (CI) et Continuous Deployment (CD) ?",
    options: [
      "CI concerne le test du code, CD concerne uniquement la livraison des artefacts",
      "CI automatise build+tests à chaque commit ; CD automatise le déploiement en production (ou staging) automatiquement",
      "CI est réservé aux développeurs, CD est réservé aux ops",
      "Il n'y a aucune différence, ce sont des synonymes"
    ],
    correct: 1,
    explanation: "<strong>CI</strong> (Intégration Continue) : build + tests automatiques à chaque commit pour détecter les régressions. <strong>CD</strong> (Déploiement Continu) : automatise le déploiement des artefacts validés en staging ou production, complétant la boucle DevOps."
  },

  // ====== OBSERVABILITÉ & TRAEFIK ======
  {
    category: "Observabilité",
    question: "Dans le cadre du cours, quel duo d'outils est utilisé pour l'observabilité (monitoring + alerting) ?",
    options: [
      "ELK Stack (Elasticsearch, Logstash, Kibana)",
      "Grafana + Prometheus",
      "Datadog + Splunk",
      "Nagios + Zabbix"
    ],
    correct: 1,
    explanation: "Le cours utilise <strong>Prometheus</strong> (collecte et stockage de métriques par scraping) couplé à <strong>Grafana</strong> (visualisation de dashboards). Prometheus récupère les métriques des exporters, Grafana les affiche et gère les alertes."
  },
  {
    category: "Observabilité",
    question: "Que signifie 'scraping' dans le contexte de Prometheus ?",
    options: [
      "Supprimer les anciennes métriques pour libérer de l'espace disque",
      "Prometheus interroge périodiquement les endpoints /metrics des services pour collecter des données",
      "Analyser les logs d'erreurs d'une application",
      "Chiffrer les métriques avant de les stocker"
    ],
    correct: 1,
    explanation: "Le <strong>scraping</strong> est le mécanisme de Prometheus : il va <em>interroger</em> (pull) périodiquement les endpoints <code>/metrics</code> exposés par les applications ou exporters (node_exporter, cAdvisor…). C'est l'inverse du modèle push."
  },
  {
    category: "Traefik & Load Balancing",
    question: "Quel est le principal avantage de Traefik par rapport à Nginx pour un environnement Docker ?",
    options: [
      "Traefik a de meilleures performances brutes pour les connexions HTTP",
      "Traefik se reconfigure automatiquement au lancement/arrêt des conteneurs Docker sans redémarrage",
      "Traefik est moins gourmand en RAM que Nginx",
      "Traefik supporte nativement les WebSockets contrairement à Nginx"
    ],
    correct: 1,
    explanation: "<strong>Traefik</strong> est un reverse-proxy moderne qui écoute le Docker socket et <strong>se reconfigure dynamiquement</strong> lorsqu'un conteneur démarre ou s'arrête — sans rechargement manuel. Nginx nécessite un reload de configuration à chaque changement."
  },
  {
    category: "Traefik & Load Balancing",
    question: "Quelle méthode de load balancing distribue les requêtes à tour de rôle entre les backends ?",
    options: [
      "Least Connections",
      "IP Hash",
      "Round Robin",
      "Random"
    ],
    correct: 2,
    explanation: "Le <strong>Round Robin</strong> distribue les requêtes séquentiellement entre les serveurs (1→2→3→1→2→3…). C'est la méthode par défaut de Traefik et la plus simple. <em>Least Connections</em> envoie vers le serveur le moins chargé, <em>IP Hash</em> assure la persistance de session."
  },
  {
    category: "Portainer & Gestion",
    question: "Quel outil graphique est utilisé dans le cours pour gérer et monitorer les conteneurs Docker en production ?",
    options: ["Rancher", "Portainer", "Lens", "Docker Dashboard"],
    correct: 1,
    explanation: "<strong>Portainer</strong> est l'interface graphique web mentionnée dans le cours pour la gestion des conteneurs Docker (étape Operate et Monitor du cycle DevOps). Il permet de gérer les stacks, images, volumes, réseaux et de visualiser les logs/métriques."
  }
];

// Catégories pour le bilan final
export const CATEGORIES = [...new Set(QUESTIONS.map(q => q.category))];
