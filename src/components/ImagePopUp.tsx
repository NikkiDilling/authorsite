import { Dialog, DialogContent } from "@mui/material";




export default function ImagePopUp(props: { image: any, open: boolean, handleClose: () => void }) {
    return (
        <div>

            <Dialog
                open={props.open}
                onClose={props.handleClose}
                maxWidth={false}
                PaperProps={{
                    style: {
                        width: '90vw',
                        height: '90vh',
                        overflow: 'hidden',   // 👈 critical
                        background: '#000',
                    },
                }}
            >
                <DialogContent
                    style={{
                        padding: 0,
                        width: '100%',
                        height: '100%',
                        overflow: 'hidden',  // 👈 critical
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <img
                        src={props.image}
                        alt=""
                        style={{
                            maxWidth: '100%',
                            maxHeight: '100%',
                            objectFit: 'contain', // 👈 no crop, no distortion
                            display: 'block',
                        }}
                    />
                </DialogContent>
            </Dialog>

        </div>
    );
}