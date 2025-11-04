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
    label: 'History'
  },
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


  return (
    <div className={classes.container}>

      <h1>Of Shadows and Sunsets</h1>
      <main>
        <div>
          <div className={classes.quotes}>

            <div>"Even ghosts don't like the dark."</div>
            <div>"Perhaps they once vowed not to repeat history, but that promise got lost. A mindless echo spread through generations.</div>
          </div>

          <div>Enter a world of elves, elemental spirits and intrigue!</div>

          <img src="src\assets\world map.png" alt="World Map" />
          <h2> Elven Wastelands</h2>
        </div>
        <section>
          <Box sx={{ maxWidth: 400 }}>
            <Stepper /* activeStep={activeStep} */ orientation="vertical" >
              {steps.map((step) => (
                <Step key={step.label}/*  onClick={() => setActiveStep(index)} */>
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