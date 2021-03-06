export const addAppointment = (
  addedAppointment, { appointment } = { appointment: {} },
) => appointment;

export const changeAddedAppointment = (
  addedAppointment, { change },
) => ({ ...addedAppointment, ...change });

export const cancelAddedAppointment = () => ({});

export const deleteAppointment = (deletedAppointmentId, { appointmentId }) => appointmentId;

export const cancelDeletedAppointment = () => null;

export const startEditAppointment = (prevEditingAppointmentId, { appointmentId }) => appointmentId;

export const stopEditAppointment = () => null;

export const changeAppointment = (
  addedAppointment, { change },
) => ({ ...addedAppointment, ...change });

export const cancelChanges = () => ({});
