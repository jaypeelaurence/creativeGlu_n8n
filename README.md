## Stacks Used
 n8n
 
 openAi
 
 gmail
 
 slack
 
 google calendar
 
 google sheet
 
 nextjs
 
 tailwindcss
 
 mongoDb

## Workflows
  - Email Receiver Workflow

    This is the receiver of emails workflow, in this workflow it classifies emails into 5 categories. and also analyses whether it requires approval or requires action.
    AI Agent transform the emails based from criterias and saves it to monogDB.
    If the email requires attention (eg. requires action or priority) it sends notification via slack or email.
    
    

  - Review Workflow

    Time based workflow that runs everyday at 8am. it compiles the emails from yesterday to the database. 
    AI Agent selects and summarize the top 5 emails based from criterias.
    Sends email and slack notification for summary.
    

    
  - Follow Up Workflow

    Time based workflow that runs everyday at 5pm. it fetches the emails to the database that requires attention, actions and priority.
    Sends email and slack notification for follow up summary.
    
    
    
  - Context Workflow

    It is a sub-workflow to get the context. It fetches contexts from sources like google sheet and gmail.
