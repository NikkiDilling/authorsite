import classes from './../css/ProjectSunset.module.scss';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  {
    label: 'Intro',
  },
  {
    label: 'Map'
  },
  {
    label: 'Series'
  },
  {
    label: 'Coming soon'
  }
];



export default function ProjectSunsetPage() {
  /*   const [activeStep, setActiveStep] = useState(0);
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleReset = () => {
      setActiveStep(0);
    }; */

  const jumpToContent = (id: string) => {
    window.location.hash = "#" + id;
  };



  return (
    <div className={classes.container} id='Intro'>

      <h2 >Project Sunset - book one of the Elven Wastelands series</h2>
      <main>
        <div>
          <div>Enter a world of elves, elemental spirits and intrigue!</div>
          <h4>Quotes</h4>
          <div className={classes.quotes}>
            <div>"Even ghosts don't like the dark."</div>
            <div>"Perhaps they once vowed not to repeat history, but that promise got lost. A mindless echo spread through generations."</div>
          </div>

          <img src="/assets/\divider.png" className={classes.divider} id='Map' />

          <div>
            <img src="/assets/world map.png" alt="World Map" />
            <div style={{ textAlign: "center" }} >Map</div>
          </div>

          <img src="/assets/\divider.png" className={classes.divider} />

          <h2> Elven Wastelands series</h2>
          <div>Currently </div>

          <img src="/assets/\divider.png" className={classes.divider} id='Series' />

          <div> some text </div>
          <img src="/assets/\divider.png" className={classes.divider} id='Coming' />

          <div> some text </div>
        </div>
        <section>
          <Box sx={{ maxWidth: 400 }}>
            <Stepper /* activeStep={activeStep} */ orientation="vertical" >
              {steps.map((step) => (
                <Step key={step.label} onClick={() => jumpToContent(step.label)} >
                  <StepLabel>
                    {step.label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
        </section>
      </main>



    </div>
  );
}