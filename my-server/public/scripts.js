function PeopleController($scope){
			$scope.people=[
					{name:"John Doe", phone: "3452345678", city:"New York"},
					{name:"Sarah Parker", phone: "1236548769", city:"Chicago"},
					{name:"Little John", phone: "4567853432", city:"Los Angeles"},
					{name:"Adam Doe", phone: "9025673152", city:"Las Vegas"}
					];
  	$scope.playerList =
  	[
      {
          company: "TiVo, Inc. (formerly Rovi Corporation)",
          location: "Santa Clara & San Carlos, CA ",
          duties: "Support various development groups with automation of CI for online entertainment metadata services. Automate CD for pre-production environments, maintain non-automated infrastructure, provide detailed manual release instructions for Production environment, and support release events. Assist in implementation for private cloud project. Assist development teams in migration of source-control from subversion to git; support implementation of infrastructure automation in OpenStack with Puppet. Following acquisition of FanTV company, became member of that team, providing support for legacy products to move from private cloud and proprietary hosting on OpenStack (Rackspace) to Amazon public cloud.",
          title: "Sr. Build & Release Engineer",
          index: 1,
          dates: "Sep 2011 - present"
      },
      {
          company: "Equinix",
          location: "Sunnyvale, CA",
          duties: "Evaluate and recommend solutions for automated deployment system. Implement pilot solution using prime candidate, provide training and documentation for Release team. WedLogic, Electric Cloud.",
          title: "Consultant",
          index: 2,
          dates: "Nov 2010 - Sep 2011"
      },
      {
          company: "Zynga",
          location: "San Francisco, CA",
          duties: "Provide support to various Game Studios, build & deployment automation. Evaluate and implement code-review tool, provide documentation and training to all Game Studios. Jenkins, subversion, CodeCollab.",
          title: "Consultant",
          index: 3,
          dates: "Jun 2010 - Sep 2010"
      },
      {
          company: "Google",
          location: "Mountain View, CA",
          duties: "Responsible for improving and documenting Build/Release/Deployment processes. Assist in integration of legacy Postini SaaS email-processing product with the Google Apps products, including Gmail. Linux development and deployment environments, shell scripting, Java/python tools, Web development",
          title: "Release Engineer",
          index: 4,
          dates: "Sep 2007 - October 2009"
      },
      {
          company: "Postini",
          location: "Redwood City/San Carlos, CA",
          duties: "Responsible for improving and documenting Build/Release/Deployment processes. Environments improved include Configuration Management (CVS), continuous builds (Tinderbox/Bonsai) and integration with defect reporting (Bugzilla). Linux/Solaris development and deployment environments, shell scripting, perl, Web development",
          title: "Build / Release Engineer",
          index: 5,
          dates: "Dec 2004 - Sep 2007"
      },
      {
          company: "Open Source Application Foundation",
          location: "San Francisco, CA",
          duties: "Responsible for maintaining and documenting Build/Release/Deployment processes for open-source contact-management product. Keep open-source dependencies up-to-date, integrate with constantly-evolving open-source product development. Maintain online public reporting pages. Windows/Linux/MacOS development and deployment environments, shell scripting, python, Web development",
          title: "Build / Release Engineer",
          index: 6,
          dates: "Mar 2004 - August 2004"
      },
      {
          company: "Verizon Wireless",
          location: "Irvine & Walnut Creek, CA",
          duties: "Responsible for migrating and documenting Build/Release/Deployment processes from proprietary configuration management (PVCS) to open-source (CVS), training engineering personnel. Linux/Windows development and deployment environments, shell scripting, Web development",
          title: "Build / Release Engineer",
          index: 7,
          dates: "Jul 2003 - Oct 2003"
      },
      {
          company: "Ejasent, Inc.",
          location: "Mountain View, CA",
          duties: "Responsible for improving and documenting Build/Release/Deployment processes. Solaris, AIX development and deployment environments, shell scripting, Java, ANT.",
          title: "Build / Release consultant",
          index: 8,
          dates: "Sep 2002 - Dec 2002"
      },
      {
          company: "TekSystems",
          location: "Newport Beach, CA",
          duties: "Contracted to privately held company developing Web-based education portal for nonprofit foundation. Responsible for improving and documenting Build/Release/Deployment processes. Setup, configured and populated source-code repository (CVS); documented and improved build and deployment processes. Coached developers in use of CVS and ANT. Solaris development and deployment environments, shell scripting, Java/XML tools (ANT, Resin)",
          title: "Build / Release consultant",
          index: 9,
          dates: "Jun 2002 - Aug 2002"
      },
      {
          company: "Eturn Communications, Inc.",
          location: "Sunnyvale, CA",
          duties: "Responsible for improving and documenting Build/Release/Deployment processes. Overhaul of Configuration Management (CVS), and integration with defect reporting. Windows/Solaris development and deployment environments, shell scripting, Java/XML tools (ANT, WebLogic, JBuilder.)",
          title: "Build / Release Engineer",
          index: 10,
          dates: "Mar 2001 - Nov 2001"
      },
      {
          company: "Futuristics Labs, Inc.",
          location: "Sunnyvale, CA",
          duties: "Hired as Build Engineer; agressive assistance in hiring process led to promotion to Manager of Build/QA. Responsible for Build/Release and QA teams, staff of 5. Setup and migrated CVS source-code repository from Pennsylvania team which had been using Visual SourceSafe. Prepared engineering guidleines for team. Mentored QA engineers in use of prototype solution to prepare plans for final release.",
          title: "Build and QA Manager",
          index: 11,
          dates: "Jul 2000 - Mar 2001"
      },
      {
          company: "Ricoh Silicon Valley",
          location: "Cupertino, CA",
          duties: "Responsible for supporting build environments and engineering group. Setup and administered CVS repository; generated engineering-support documentation and build/release guidelines. Mentored staff on use of tools. Created installation procedures and maintained liaison with QA to support feature updates. FreeBSD/Linux environments; Perl, shell scripting. C/C++ development.",
          title: "Build/Release Tools Engineer (staff)",
          index: 12,
          dates: "Apr 1998 - Jun 2000"
      },
      {
          company: "Network Associates, Inc.",
          location: "Santa Clara, CA",
          duties: "Responsible for architecting and implementing auto-update features for Mac anti-virus client. Networking and GUI development required. CodeWarrior C++/PowerPlant class libraries. ",
          title: "Contract Software Engineer, Macintosh Anti-Virus Products group ",
          index: 13,
          dates: "Mar 1998"
      },
      {
          company: "Taligent, Inc.",
          location: "Cupertino, CA",
          duties: "Responsible for System Test enhancements and test process improvements. Build, test, debugging cycles were restructured to improve the overall test/release cycle. Environments supported include Win95, WinNT, OS/2 and AIX. Shell scripting &amp; Perl scripting. ",
          title: "Contract Software Engineer, Project Engineering",
          index: 14,
          dates: "May 1997 - Dec 1997"
      },
      {
          company: "Adobe Systems, Inc.",
          location: "San Jose, CA",
          duties: "Responsible for supporting Localization efforts for new release of Illustrator software product. Coordinated exchange of localizable resources between engineering repository and off-shore translation agency; prepared installer packages with latest builds and managed self-test before QA handoff.",
          title: "Contract Software Engineer, Localization & Internationalization group",
          index: 15,
          dates: "Mar 1997 - May 1997"
      },
      {
          company: "Silicon Graphics, Inc.",
          location: "Mountain View, CA",
          duties: "Responsible for supporting Localization efforts for new release of OS and O2 product. Coordinated exchange of localizable resources between engineering repository and off-shore translation agency; prepared installer packages with latest builds and managed self-test before QA handoff.",
          title: "Localization Engineer",
          index: 16,
          dates: "Sep 1996 - Jan 1997"
      },
      {
          company: "Apple Computer, Inc.",
          location: "Cupertino, CA",
          duties: "Provide integration support to development teams working on next-generation operating-system. Bring-up Taligent CommonPoint subsystem on nukernel OS, evaluate and provide feedback to Taligent engineers on issues regarding performance of CP layer on nukernel. Additional duties around introduction of mk-linux at WWDC.",
          title: "Softare Engineer, Kernel Group",
          index: 17,
          dates: "Jan 1995 - Sep 1996"
      },
      {
          company: "Taligent, Inc.",
          location: "Cupertino, CA",
          duties: "Support various engineering teams with reliable build environment and feedback on nightly build issues. Support and train engineering teams while rolling-out paradigm-shifts in build technology, engage in switch from MPW-on-MacOS to AIX-on-PPC.",
          title: "Build Engineer",
          index: 18,
          dates: "Feb 1993 - Jan 1995"
      },
      {
          company: "Claris Corp.",
          location: "Santa Clara, CA",
          duties: "Core Technologies; MacWrite Pro Development Team; MacOS /MPW build environments; C coding; Multi-platform protocols for document-interchange file-format translation",
          title: "Software Engineer III",
          index: 19,
          dates: "Jan 1990 - Jan 1993"
      },
      {
          company: "Apple Computer, Inc.",
          location: "Fremont, CA",
          duties: "Suport hardware team bringing up new production line for Macintosh models. Develop visual view of burn-in process, allowing status checks of in-work product by pallet or model.",
          title: "Software Engineer",
          index: 20,
          dates: "Dec 1989 - Dec 1990"
      },
      {
          company: "DEST, Inc.",
          location: "San Jose, CA",
          duties: "Perform localization engineering work for new desktop scanner product, working with vendors for translations, and integrating updates for QA.",
          title: "Localization Engineer",
          index: 21,
          dates: "Jul 1989 - Dec 1989"
      },
      {
          company: "Transitional Tecnologies, Inc.",
          location: "Orange, CA",
          duties: "Perform maintenance and enhancement to device-drivers and user applications for high-capacity backup storage solutions using Exabyte cartridges on MacOS.",
          title: "Software Engineer",
          index: 22,
          dates: "Sep 1988 - Jun 1989"
      },
      {
          company: "Information International, Inc.",
          location: "Culver City, CA",
          duties: "Provide programming support and visual effects for feature film computer-simulated imagery. Scene design, lighting and animation.",
          title: "Techincal Director",
          index: 23,
          dates: "Sep 1979 - Dec 1980"
      },
      {
          company: "Bechtel Power Group",
          location: "Norwalk, CA",
          duties: "Support 3-D CAD systems engineers with custom templates and expanded tooling features for piping and electrical layout.",
          title: "CAD Systems Engineer",
          index: 24,
          dates: "Jan 1981 - Jul 1982"
      },
      {
          company: "VG Systems",
          location: "Woodland Hills, CA",
          duties: "Responsible for customer demos and applications benchmark development for interactive 3-D graphics display systems manufacturer. Some key projects included Command and Control for NASA and E-Systems, data reduction and analysis for Boeing and sales support activity involving on-site installations at several key universities.",
          title: "Applications Engineer",
          index: 25,
          dates: "May 1977 - Jul 1979"
      },
      {
          company: "General Electric Co.",
          location: "King of Prussia, PA",
          duties: "Responsible for engineering and scientific computation support to R&D lab in aerospace and oceanographic facility. Participated in several significant contracts involving remote acquisition and telemetry of data streams, and extensive work involving capture and reduction of vast volumes of research data from hypersonic test facility. Additional work involved setup of shore-station, relay-station and data-gathering system for ocean-going instrumentation facility, using PDP-8e microcomputer and locally-developed RTOS.",
          title: "Mathematics Technician",
          index: 26,
          dates: "Feb 1967 - May 1977"
      }

    ];

$scope.Save=function(){

$scope.people.push({name:$scope.newPerson.name, phone:$scope.newPerson.phone, city:$scope.newPerson.city});
$scope.formVisibility=false;
console.log($scope.formVisibility)
}

$scope.formVisibility=false;

$scope.ShowForm=function(){

	$scope.formVisibility=true;
	console.log($scope.formVisibility)
	
}

}